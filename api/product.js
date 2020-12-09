export default (api) =>({
  getProduct(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
      include: 'field_image,field_category',
    }
  
    return api.get(`product/${uuid}`, params);
  },

  getAllProducts(limit = 4, page = 0) {
    const params = {
      page: {
        limit: limit,
        offset: page
      },
      filter: {
        status: {
          value: 1
        },
      },
      include: 'field_image,field_category',
    }
  
    return api.get('product', params);
  },

  getAllProductsByCategory(limit = 4, categoryId) {
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
  },

  getAllProductsByLocation(limit = 4, locationId) {
    const params = {
      page: {
        limit: limit
      },
      filter: {
        status: {
          value: 1
        },
        location: {
          condition: {
            path: 'field_location.id',
            operator: '=',
            value: locationId,
          },
        },
      },
      include: 'field_image,field_category',
    }
  
    return api.get('product', params);
  }
})
