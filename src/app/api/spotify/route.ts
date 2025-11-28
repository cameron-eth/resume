import { NextResponse } from 'next/server'

// Spotify API Configuration
// Note: As of 2025, Spotify requires redirect URIs to use http://127.0.0.1 instead of http://localhost
// Make sure your Spotify app's redirect URI is set to: http://127.0.0.1:3000
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || 'eed4801111f64450ad0dcf2455f439bb'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '069f8af42096432da9dff6bd01e3bb06'
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || ''
const SPOTIFY_ACCESS_TOKEN = process.env.SPOTIFY_ACCESS_TOKEN || '' // Temporary access token for testing

async function getAccessToken() {
  // If a temporary access token is provided, use it (for testing)
  if (SPOTIFY_ACCESS_TOKEN && SPOTIFY_ACCESS_TOKEN.trim() !== '') {
    return SPOTIFY_ACCESS_TOKEN
  }

  // Otherwise, use refresh token to get a new access token
  if (!SPOTIFY_REFRESH_TOKEN || SPOTIFY_REFRESH_TOKEN.trim() === '') {
    throw new Error('No refresh token or access token provided')
  }

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

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    // Only log error if we don't have a fallback access token
    if (!SPOTIFY_ACCESS_TOKEN || SPOTIFY_ACCESS_TOKEN.trim() === '') {
      console.error('Spotify token error:', response.status, errorData)
    }
    throw new Error(`Failed to get access token: ${response.status}`)
  }

  const data = await response.json()
  return data.access_token
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const endpoint = searchParams.get('endpoint')
    const type = searchParams.get('type') || 'artists'
    const timeRange = searchParams.get('time_range') || 'medium_term'
    const limit = searchParams.get('limit') || '10'
    const query = searchParams.get('q') // For search endpoint

    // If no refresh token or access token, return empty data gracefully
    if ((!SPOTIFY_REFRESH_TOKEN || SPOTIFY_REFRESH_TOKEN.trim() === '') && 
        (!SPOTIFY_ACCESS_TOKEN || SPOTIFY_ACCESS_TOKEN.trim() === '')) {
      return NextResponse.json({ items: [] })
    }

    const accessToken = await getAccessToken()

    let apiUrl: string
    if (endpoint === 'search' && query) {
      apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`
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

