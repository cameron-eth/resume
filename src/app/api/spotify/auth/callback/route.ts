import { NextResponse } from 'next/server'

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || 'eed4801111f64450ad0dcf2455f439bb'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '069f8af42096432da9dff6bd01e3bb06'
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI || 'http://127.0.0.1:3000/api/spotify/auth/callback'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }

  if (!code) {
    return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 })
  }

  try {
    // Exchange code for refresh token
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json({ error: 'Failed to exchange code', details: errorData }, { status: response.status })
    }

    const data = await response.json()

    // Return HTML page that stores tokens in localStorage and redirects
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Spotify Authorization</title>
        </head>
        <body>
          <script>
            const tokens = ${JSON.stringify({
              access_token: data.access_token,
              refresh_token: data.refresh_token,
              expires_in: data.expires_in,
              token_type: data.token_type,
            })};
            
            localStorage.setItem('spotify_access_token', tokens.access_token);
            localStorage.setItem('spotify_refresh_token', tokens.refresh_token);
            localStorage.setItem('spotify_expires_at', (Date.now() + tokens.expires_in * 1000).toString());
            
            window.location.href = '/';
          </script>
          <p>Authorization successful! Redirecting...</p>
        </body>
      </html>
    `

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process authorization', details: String(error) }, { status: 500 })
  }
}

