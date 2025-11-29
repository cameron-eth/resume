import { NextResponse } from 'next/server'

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || 'eed4801111f64450ad0dcf2455f439bb'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '069f8af42096432da9dff6bd01e3bb06'
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI || 'http://127.0.0.1:3000/api/spotify/auth/callback'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')

  if (action === 'authorize') {
    // Redirect to Spotify authorization
    const scopes = 'user-top-read'
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scopes}`
    
    return NextResponse.redirect(authUrl)
  }

  return NextResponse.json({ 
    message: 'Visit /api/spotify/auth?action=authorize to start authorization',
    redirect_uri: REDIRECT_URI 
  })
}

