import client from '~/api/client.js'
import product from '~/api/product.js'
import category from '../api/category.js';

export default (ctx, inject) => {
  const api = client(ctx.$axios, ctx.$config);

  const repositories = {
    product: product(api),
    category: category(api)
  }

  inject('repository', repositories)
}