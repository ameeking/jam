import client from '~/api/client.js'
import product from '~/api/product.js'
import category from '../api/category.js';
import post from '../api/post.js';
import location from '../api/location.js';

export default (ctx, inject) => {
  const api = client(ctx.$axios, ctx.$config);

  const repositories = {
    product: product(api),
    category: category(api),
    post: post(api),
    location: location(api)
  }

  inject('repository', repositories)
}