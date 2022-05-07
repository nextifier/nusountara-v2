export const state = () => ({
  events: [

  ]
})

export const getters = {
  allEvents: state => state.events,

  getEventBySlug: (state) => (slug) => {
    return state.events.find(event => event.slug === slug);
  },
}

export const mutations = {}
