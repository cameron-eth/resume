import { NextResponse } from 'next/server'

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '10fdb1f3181f498e952d0a72ec2cde2a'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '036942167f54452d93b4c73240129b22'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  
  // Dynamically determine redirect URI based on current request
  const url = new URL(request.url)
  const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI || `${url.protocol}//${url.host}/api/spotify/auth/callback`

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

    // Return HTML page that shows the refresh token for copying to .env.local
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Spotify Authorization Success</title>
          <style>
            body { 
              font-family: 'IBM Plex Sans', -apple-system, sans-serif; 
              background: #0f0d0b; 
              color: #e8e2d6; 
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
            }
            h1 { color: #c87941; }
            .token-box { 
              background: #1a1714; 
              border: 1px solid #2d2824; 
              padding: 16px; 
              border-radius: 8px; 
              margin: 16px 0;
              word-break: break-all;
              font-family: monospace;
              font-size: 12px;
            }
            .label { 
              color: #8a847a; 
              font-size: 12px; 
              text-transform: uppercase; 
              letter-spacing: 0.1em;
              margin-bottom: 8px;
            }
            .instructions {
              background: rgba(200, 121, 65, 0.15);
              border: 1px solid rgba(200, 121, 65, 0.3);
              padding: 16px;
              border-radius: 8px;
              margin-top: 24px;
            }
            code { 
              background: #2d2824; 
              padding: 2px 6px; 
              border-radius: 4px;
            }
            a { color: #c87941; }
          </style>
        </head>
        <body>
          <h1>✓ Authorization Successful!</h1>
          
          <div class="label">Refresh Token (copy this)</div>
          <div class="token-box">${data.refresh_token}</div>
          
          <div class="instructions">
            <p><strong>Next steps:</strong></p>
            <ol>
              <li>Create a file called <code>.env.local</code> in your resume folder</li>
              <li>Add this line:<br><code>SPOTIFY_REFRESH_TOKEN=${data.refresh_token}</code></li>
              <li>Restart your dev server</li>
            </ol>
          </div>
          
          <p style="margin-top: 24px;"><a href="/">← Back to site</a></p>
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

