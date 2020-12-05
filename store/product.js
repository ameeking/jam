import jsonapiParse from 'jsonapi-parse';

const state = {
  products: []
}

const mutations = {}

const getters = {}

const actions = {
  async getProducts() {
    let res = await this.$axios.$get('https://drupal-9-headless.lndo.site/jsonapi/node/product?include=field_image,field_category');
    return jsonapiParse.parse(res);
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}