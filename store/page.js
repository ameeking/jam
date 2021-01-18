// page.js file in the store folder
export const state = () => ({
  title: '',
  banner: ''
})

export const mutations = {
  setTitle(state, title) {
    state.title = title
  },
  setBanner(state, banner) {
    state.banner = banner
  }
}

export const getters = {
  getTitle: (state) => state.title,
  getBanner: (state) => state.banner,
}
