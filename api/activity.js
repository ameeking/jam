export default (api) =>({
  getActivity(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
      include: 'field_hero_image,field_category,field_destination',
    }
  
    return api.get(`activity/${uuid}`, params);
  },

  getAllActivities(limit = 4, page = 0) {
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
      include: 'field_hero_image,field_category,field_destination',
    }
  
    return api.get('activity', params);
  },

  getAllActivitiesByCategory(limit = 4, categoryId) {
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
      include: 'field_hero_image,field_category,field_destination',
    }
  
    return api.get('activity', params);
  },

  getAllActivitiesByLocation(limit = 4, locationId) {
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
            path: 'field_destination.id',
            operator: '=',
            value: locationId,
          },
        },
      },
      include: 'field_hero_image,field_category,field_destination',
    }
  
    return api.get('activity', params);
  },

  getAllActivitiesByRegion(limit = 4, regionId) {
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
            path: 'field_destination.field_region.id',
            operator: '=',
            value: regionId,
          },
        },
      },
      include: 'field_hero_image,field_category,field_destination.field_region',
    }
  
    return api.get('activity', params);
  }
})
