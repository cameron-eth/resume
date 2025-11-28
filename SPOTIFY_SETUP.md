# Spotify API Setup Guide

## Important: Spotify Security Requirements (2025)

Spotify has updated their security requirements. **You must use `http://127.0.0.1:3000` instead of `http://localhost:3000`** for local development redirect URIs.

## Quick Setup

### Step 1: Update Redirect URI in Spotify Dashboard

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Select your app
3. Click "Edit Settings"
4. Under "Redirect URIs", make sure you have: `http://127.0.0.1:3000`
5. Remove any `http://localhost:3000` entries
6. Save changes

### Step 2: Get Your Refresh Token

#### Option A: Using the Authorization URL

1. Open this URL in your browser:
```
https://accounts.spotify.com/authorize?client_id=eed4801111f64450ad0dcf2455f439bb&response_type=code&redirect_uri=http://127.0.0.1:3000&scope=user-top-read
```

2. Authorize the application
3. You'll be redirected to `http://127.0.0.1:3000?code=YOUR_AUTHORIZATION_CODE`
4. Copy the `code` parameter from the URL

#### Option B: Using Temporary Access Token

If you have a temporary access token, you can use it immediately:

1. Create `.env.local` file:
```
SPOTIFY_ACCESS_TOKEN=your_access_token_here
```

2. Restart your dev server

**Note:** Access tokens expire in ~1 hour. For a permanent solution, get a refresh token.

### Step 3: Exchange Code for Refresh Token

Run this command (replace `YOUR_CODE` with the authorization code):

```bash
curl -X POST \
  -H "Authorization: Basic $(echo -n 'eed4801111f64450ad0dcf2455f439bb:069f8af42096432da9dff6bd01e3bb06' | base64)" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=YOUR_CODE&redirect_uri=http://127.0.0.1:3000" \
  https://accounts.spotify.com/api/token
```

### Step 4: Add Refresh Token to Environment

Create or update `.env.local`:

```
SPOTIFY_CLIENT_ID=eed4801111f64450ad0dcf2455f439bb
SPOTIFY_CLIENT_SECRET=069f8af42096432da9dff6bd01e3bb06
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

### Step 5: Restart Dev Server

Restart your Next.js dev server for the changes to take effect.

## Troubleshooting

### "Invalid refresh token" error

- Make sure you're using the latest refresh token
- Check that the redirect URI in your Spotify app settings matches exactly: `http://127.0.0.1:3000`
- Refresh tokens can be revoked if you regenerate your client secret

### Access token expired

- If using `SPOTIFY_ACCESS_TOKEN`, it expires in ~1 hour
- Switch to using `SPOTIFY_REFRESH_TOKEN` for automatic token renewal

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Keep your client secret secure
- Refresh tokens don't expire unless revoked, so store them securely

