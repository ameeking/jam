import client from '~/api/client.js'
import itinerary from '~/api/itinerary.js'
import activity from '../api/activity.js';
import category from '../api/category.js';
import post from '../api/post.js';
import location from '../api/location.js';
import region from '../api/region.js';

export default (ctx, inject) => {
  const api = client(ctx.$axios, ctx.$config);

  const repositories = {
    itinerary: itinerary(api),
    activity: activity(api),
    category: category(api),
    post: post(api),
    location: location(api),
    region: region(api)
  }

  inject('repository', repositories)
}