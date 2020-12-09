export default (api) =>({
  getCountry(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
    }
  
    return api.get(`country/${uuid}`, params);
  },

  getAllCountries(limit = 4) {
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
  
    return api.get('country', params);
  },
})
