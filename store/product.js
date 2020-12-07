import jsonapiParse from 'jsonapi-parse';

export const state = () => ({
  products: []
})

export const actions = {
  async getProducts() {
    let res = await this.$axios.$get('https://drupal-9-headless.lndo.site/jsonapi/node/product?include=field_image,field_category');
    return jsonapiParse.parse(res);
  }
}
