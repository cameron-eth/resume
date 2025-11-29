import { NextResponse } from 'next/server'

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || 'eed4801111f64450ad0dcf2455f439bb'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '069f8af42096432da9dff6bd01e3bb06'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const refreshToken = body.refresh_token

    if (!refreshToken) {
      return NextResponse.json({ error: 'Refresh token is required' }, { status: 400 })
    }

    // Refresh the access token using the refresh token
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return NextResponse.json({ error: 'Failed to refresh token', details: errorData }, { status: response.status })
    }

    const data = await response.json()

    return NextResponse.json({
      access_token: data.access_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
      // Spotify may return a new refresh token, use it if provided
      refresh_token: data.refresh_token || refreshToken,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to refresh token', details: String(error) }, { status: 500 })
  }
}

