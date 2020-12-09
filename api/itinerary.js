export default (api) =>({
  getItinerary(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
      include: 'field_image,field_activity.field_category',
    }
  
    return api.get(`itinerary/${uuid}`, params);
  },

  getAllItineraries(limit = 4, page = 0) {
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
      include: 'field_image,field_activity.field_category',
    }
  
    return api.get('itinerary', params);
  },

  getAllItinerariesByCategory(limit = 4, categoryId) {
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
            path: 'field_activity.field_category.id',
            operator: '=',
            value: categoryId,
          },
        },
      },
      include: 'field_image,field_activity.field_category',
    }
  
    return api.get('itinerary', params);
  },

  getAllItinerariesByLocation(limit = 4, locationId) {
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
      include: 'field_image,field_category,field_location',
    }
  
    return api.get('itinerary', params);
  },

  getAllItinerariesByCountry(limit = 4, locationId) {
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
            path: 'field_location.field_country.id',
            operator: '=',
            value: locationId,
          },
        },
      },
      include: 'field_image,field_category,field_location.field_country',
    }
  
    return api.get('itinerary', params);
  },

  getAllItinerariesByRegion(limit = 4, locationId) {
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
            path: 'field_location.field_country.field_region.id',
            operator: '=',
            value: locationId,
          },
        },
      },
      include: 'field_image,field_category,field_location.field_country.field_region',
    }
  
    return api.get('itinerary', params);
  }
})
