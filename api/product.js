import api from './client';

export function getAllProducts(limit = 4) {
  const params = {
    page: {
      limit: limit
    },
    filter: {
      status: {
        value: 1
      }
    },
    include: 'field_image,field_category',
  }

  return api.get('product', params);
}