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

  getTracksByGenre: (state) => (genre) => {
    return state.tracks.list.filter(track => track.genres && track.genres.includes(genre));
  },

  getTopChartTracksByGenre: (state) => (genre) => {
    return state.tracks.list.filter(track => track.genres && track.genres.includes(genre) && track.playlist == 'Top Charts');
  },

  getSeriesByCategory: (state) => (category) => {
    return state.series.list.filter(item => item.categories && item.categories.includes(category)).sort((a, b) => {
      return b.release_date - a.release_date
    });
  },

  getSeriesByCategoryWithLimit: (state) => (category) => {
    return state.series.list.filter(item => item.categories && item.categories.includes(category)).sort((a, b) => {
      return b.release_date - a.release_date
    }).splice(0, 10);
  },

  getSeriesBySlug: (state) => (slug) => {
    return state.series.list.find(item => item.slug === slug);
  },

  getRecommendedSeries: (state) => (category, slug) => {
    return state.series.list.filter(item => item.categories && item.categories.includes(category) && item.slug != slug).sort((a, b) => {
      return b.release_date - a.release_date
    }).splice(0, 10);
  }
}

export const mutations = {}
