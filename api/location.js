export default (api) =>({
  getLocation(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
    }
  
    return api.get(`destination/${uuid}`, params);
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
  
    return api.get('destination', params);
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
      include: 'field_region,field_hero_image',
    }

    return api.get('destination', params);
  },
})
