import fs from "fs"
import path from "path"

const TOKEN_FILE = path.join(process.cwd(), ".spotify-token.json")

export interface SpotifyToken {
  refresh_token?: string
  access_token?: string
  expires_at?: number
}

export function getSpotifyToken(): SpotifyToken {
  try {
    if (fs.existsSync(TOKEN_FILE)) {
      const data = fs.readFileSync(TOKEN_FILE, "utf-8")
      return JSON.parse(data)
    }
  } catch (error) {
    console.error("Error reading token file:", error)
  }

  // Fallback to environment variables
  return {
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN || "",
    access_token: process.env.SPOTIFY_ACCESS_TOKEN || "",
  }
}

export function saveSpotifyToken(token: Partial<SpotifyToken>): void {
  try {
    const current = getSpotifyToken()
    const updated = {
      ...current,
      ...token,
    }

    // Don't write to file in production, use env vars instead
    if (process.env.NODE_ENV !== "production") {
      fs.writeFileSync(TOKEN_FILE, JSON.stringify(updated, null, 2))
    }
  } catch (error) {
    console.error("Error saving token file:", error)
  }
}

export async function refreshAccessToken(refreshToken: string): Promise<string> {
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || "eed4801111f64450ad0dcf2455f439bb"
  const SPOTIFY_CLIENT_SECRET =
    process.env.SPOTIFY_CLIENT_SECRET || "069f8af42096432da9dff6bd01e3bb06"

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`Failed to refresh token: ${response.status} - ${JSON.stringify(errorData)}`)
  }

  const data = await response.json()

  // Save the new access token
  saveSpotifyToken({
    access_token: data.access_token,
    expires_at: Date.now() + data.expires_in * 1000,
  })

  return data.access_token
}
