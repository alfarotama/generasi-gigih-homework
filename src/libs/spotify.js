const BASE_URL = 'https://api.spotify.com/v1'

export const spotifyAuthUrl = () => {
  const options = new URLSearchParams({
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/',
    response_type: 'token',
    scope: 'playlist-modify-private',
  }).toString()
  return `https://accounts.spotify.com/authorize?${options}`
}

export const authorize = () => {
  window.location.replace(spotifyAuthUrl())
}

export const getProfile = accessToken => {
  return fetch(`${BASE_URL}/me`, {
    headers: { Authorization: 'Bearer ' + accessToken },
  }).then(res => res.json())
}

export const getTracks = (accessToken, options) => {
  const params = new URLSearchParams(options).toString()
  return fetch(`${BASE_URL}/search?${params}`, {
    headers: { Authorization: 'Bearer ' + accessToken },
  }).then(res => res.json())
}

export const postPlaylist = (accessToken, userId, payload) => {
  return fetch(`${BASE_URL}/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json())
}

export const postPlaylistTracks = (accessToken, playlistId, payload) => {
  return fetch(`${BASE_URL}/playlists/${playlistId}/tracks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json())
}
