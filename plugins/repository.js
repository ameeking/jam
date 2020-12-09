import client from '~/api/client.js'
import product from '~/api/product.js'
import itinerary from '~/api/itinerary.js'
import activity from '../api/activity.js';
import category from '../api/category.js';
import post from '../api/post.js';
import location from '../api/location.js';
import region from '../api/region.js';
import country from '../api/country.js';

export default (ctx, inject) => {
  const api = client(ctx.$axios, ctx.$config);

  const repositories = {
    product: product(api),
    itinerary: itinerary(api),
    activity: activity(api),
    category: category(api),
    post: post(api),
    location: location(api),
    region: region(api),
    country: country(api)
  }

  inject('repository', repositories)
}