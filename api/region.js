export default (api) =>({
  getRegion(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
    }
  
    return api.get(`region/${uuid}`, params);
  },

  getAllRegions(limit = 4) {
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
  
    return api.get('region', params);
  },
})
