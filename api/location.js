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
})
