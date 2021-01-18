export default (api) =>({
  getPost(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
      include: 'field_hero_image,field_category,uid',
    }
  
    return api.get(`post/${uuid}`, params);
  },

  getAllPosts(limit = 4) {
    const params = {
      page: {
        limit: limit
      },
      filter: {
        status: {
          value: 1
        },
      },
      include: 'field_hero_image,field_category,uid',
    }
  
    return api.get('post', params);
  },

  getAllPostsByCategory(limit = 4, categoryId) {
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
      include: 'field_hero_image,field_category,uid',
    }
  
    return api.get('post', params);
  },

  getAllPostsByLocation(limit = 4, locationId) {
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
            path: 'field_destination.id',
            operator: '=',
            value: locationId,
          },
        },
      },
      include: 'field_hero_image,field_destination,uid',
    }
  
    return api.get('post', params);
  },

  getAllPostsByRegion(limit = 4, regionId) {
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
            path: 'field_destination.field_region.id',
            operator: '=',
            value: regionId,
          },
        },
      },
      include: 'field_hero_image,field_destination,field_destination.field_region,uid',
    }
  
    return api.get('post', params);
  }
})
