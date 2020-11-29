// page.js file in the store folder
const state = {
  title: '',
  banner: ''
}

const mutations = {
  setTitle(state, title) {
    state.title = title
  },
  setBanner(state, banner) {
    state.banner = banner
  }
}

const getters = {
  getTitle: (state) => state.title,
  getBanner: (state) => state.banner,
}

export default {
  state,
  mutations,
  getters
}