// page.js file in the store folder
const state = {
  title: ''
}

const mutations = {
  setTitle(state, title) {
    state.title = title
  }
}

const getters = {
  getTitle: (state) => state.title
}

export default {
  state,
  mutations,
  getters
}