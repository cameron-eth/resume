import { NextResponse } from 'next/server'

// Spotify API Configuration
// Note: As of 2025, Spotify requires redirect URIs to use http://127.0.0.1 instead of http://localhost
// Make sure your Spotify app's redirect URI is set to: http://127.0.0.1:3000
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || 'eed4801111f64450ad0dcf2455f439bb'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '069f8af42096432da9dff6bd01e3bb06'
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || ''
const SPOTIFY_ACCESS_TOKEN = process.env.SPOTIFY_ACCESS_TOKEN || '' // Temporary access token for testing

async function getAccessToken() {
  // Prioritize refresh token if available (permanent solution)
  if (SPOTIFY_REFRESH_TOKEN && SPOTIFY_REFRESH_TOKEN.trim() !== '') {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      return data.access_token
    }
    // If refresh fails, fall through to access token
  }

  // Fallback to temporary access token if no refresh token or refresh failed
  if (SPOTIFY_ACCESS_TOKEN && SPOTIFY_ACCESS_TOKEN.trim() !== '') {
    return SPOTIFY_ACCESS_TOKEN
  }

  throw new Error('No valid refresh token or access token provided')
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const endpoint = searchParams.get('endpoint')
    const type = searchParams.get('type') || 'artists'
    const timeRange = searchParams.get('time_range') || 'medium_term'
    const limit = searchParams.get('limit') || '10'
    const query = searchParams.get('q') // For search endpoint
    // Use server-side tokens (your Spotify account)
    if ((!SPOTIFY_REFRESH_TOKEN || SPOTIFY_REFRESH_TOKEN.trim() === '') && 
        (!SPOTIFY_ACCESS_TOKEN || SPOTIFY_ACCESS_TOKEN.trim() === '')) {
      return NextResponse.json({ items: [] })
    }

    const accessToken = await getAccessToken()

    let apiUrl: string
    const audiobookId = searchParams.get('audiobook_id')
    const showId = searchParams.get('show_id')
    
    if (audiobookId) {
      // Fetch specific audiobook
      apiUrl = `https://api.spotify.com/v1/audiobooks/${audiobookId}`
    } else if (showId) {
      // Fetch specific show/podcast
      apiUrl = `https://api.spotify.com/v1/shows/${showId}`
    } else if (endpoint === 'search' && query) {
      const searchType = searchParams.get('search_type') || 'track'
      const searchLimit = searchParams.get('limit') || '1'
      apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${searchType}&limit=${searchLimit}`
    } else {
      apiUrl = `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`
    }

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      
      // If access token expired, try refreshing
      if (response.status === 401 && SPOTIFY_REFRESH_TOKEN) {
        try {
          const newAccessToken = await getAccessToken()
          const retryResponse = await fetch(apiUrl, {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          })
          if (retryResponse.ok) {
            const retryData = await retryResponse.json()
            return NextResponse.json(retryData)
          }
        } catch (retryError) {
          console.error('Failed to refresh token:', retryError)
        }
      }
      
      console.error('Spotify API error:', response.status, errorData)
      return NextResponse.json({ items: [] })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    // Silently return empty data instead of throwing errors
    // This prevents console spam when refresh token is not set up
    return NextResponse.json({ items: [] })
  }
}

