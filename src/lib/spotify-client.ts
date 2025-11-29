'use client'

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'spotify_access_token',
  REFRESH_TOKEN: 'spotify_refresh_token',
  EXPIRES_AT: 'spotify_expires_at',
}

export interface SpotifyTokens {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
}

export function getStoredTokens(): { access_token: string | null; refresh_token: string | null; expires_at: number | null } {
  if (typeof window === 'undefined') {
    return { access_token: null, refresh_token: null, expires_at: null }
  }

  return {
    access_token: localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
    refresh_token: localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN),
    expires_at: parseInt(localStorage.getItem(STORAGE_KEYS.EXPIRES_AT) || '0', 10),
  }
}

export function storeTokens(tokens: SpotifyTokens): void {
  if (typeof window === 'undefined') return

  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token)
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token)
  const expiresAt = Date.now() + tokens.expires_in * 1000
  localStorage.setItem(STORAGE_KEYS.EXPIRES_AT, expiresAt.toString())
}

export function clearTokens(): void {
  if (typeof window === 'undefined') return

  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
  localStorage.removeItem(STORAGE_KEYS.EXPIRES_AT)
}

export async function refreshAccessToken(refreshToken: string): Promise<SpotifyTokens> {
  const response = await fetch('/api/spotify/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(`Failed to refresh token: ${response.status} - ${JSON.stringify(error)}`)
  }

  const data = await response.json()
  
  // Store the new tokens
  storeTokens({
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_in: data.expires_in,
    token_type: data.token_type,
  })

  return data
}

export async function getValidAccessToken(): Promise<string | null> {
  const { access_token, refresh_token, expires_at } = getStoredTokens()

  // If no tokens stored, return null
  if (!access_token || !refresh_token) {
    return null
  }

  // Check if token is expired (with 5 minute buffer)
  const isExpired = expires_at ? Date.now() >= expires_at - 5 * 60 * 1000 : true

  if (isExpired) {
    try {
      const newTokens = await refreshAccessToken(refresh_token)
      return newTokens.access_token
    } catch (error) {
      console.error('Failed to refresh token:', error)
      clearTokens()
      return null
    }
  }

  return access_token
}

