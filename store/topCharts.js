export const state = () => ({
  genres: [{
      id: 'G001',
      name: 'House',
      slug: 'house',
    },
    {
      id: 'G002',
      name: 'Techno',
      slug: 'techno',
    }
  ]
})

export const getters = {
  allGenres: state => state.genres,
}

export const mutations = {}
