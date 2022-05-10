export const state = () => ({
  appName: 'Nusountara',
  instagram: 'nusountara',
  youtube: 'https://www.youtube.com/c/Nusountara',
  spotify: 'https://open.spotify.com/user/3wd33l8350x2ank0gtddjq8si?si=de6b4c703f044245',
  soundcloud: 'https://soundcloud.com/user-479925817',
  mixcloud: 'https://www.mixcloud.com/Nusountara/',
})

export const getters = {
  getArtistBySlug: (state) => (slug) => {
    return state.artists.list.find(artist => artist.slug === slug);
  },

  getPlaylistBySlug: (state) => (slug) => {
    return state.playlists.list.find(playlist => playlist.slug === slug);
  },

  getPlaylistByArtistSlug: (state) => (slug) => {
    return state.playlists.list.find(playlist => playlist.artist_slug === slug);
  },

  getTrackBySlug: (state) => (slug) => {
    return state.tracks.list.find(track => track.slug === slug);
  },
}

export const mutations = {}
