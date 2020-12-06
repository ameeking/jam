import api from './client';

export function getAllProducts(limit = 4) {
  const params = {
    page: {
      limit: limit
    },
    filter: {
      status: {
        value: 1
      },
    },
    include: 'field_image,field_category',
  }

  return api.get('product', params);
}

export function getAllProductsByCategory(limit = 4, categoryId) {
  const params = {
    page: {
      limit: limit
    },
    filter: {
      status: {
        value: 1
      },
      category: {
        condition: {
          path: 'field_category.id',
          operator: '=',
          value: categoryId,
        },
      },
    },
    include: 'field_image,field_category',
  }

  return api.get('product', params);
}
