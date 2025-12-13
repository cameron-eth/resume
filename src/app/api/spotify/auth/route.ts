import { NextResponse } from 'next/server'

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '10fdb1f3181f498e952d0a72ec2cde2a'
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '036942167f54452d93b4c73240129b22'

// Use consistent redirect URI - must match exactly what's in Spotify dashboard
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI || 'https://www.norfleet.tech/api/spotify/auth/callback'

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
    redirect_uri: REDIRECT_URI,
    note: 'Make sure this redirect URI is added to your Spotify app settings at https://developer.spotify.com/dashboard'
  })
}

