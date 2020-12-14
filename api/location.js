export default (api) =>({
  getLocation(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
    }
  
    return api.get(`location/${uuid}`, params);
  },

  getAllLocations(limit = 4) {
    const params = {
      page: {
        limit: limit
      },
      filter: {
        status: {
          value: 1
        },
      },
    }
  
    return api.get('location', params);
  },

  getAllLocationsByRegion(limit = 4, regionId) {
    const params = {
      page: {
        limit: limit
      },
      filter: {
        status: {
          value: 1
        },
        region: {
          condition: {
            path: 'field_region.id',
            operator: '=',
            value: regionId,
          },
        },
      },
      include: 'field_region,field_image',
    }

    return api.get('location', params);
  },
})
