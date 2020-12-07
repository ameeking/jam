export default (api) =>({
  getCategory(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
      include: 'field_image',
    }
  
    return api.get(`category/${uuid}`, params);
  },

  getAllCategories(limit = 4) {
    const params = {
      page: {
        limit: limit
      },
      filter: {
        status: {
          value: 1
        },
      },
      include: 'field_image',
    }
  
    return api.get('category', params);
  },
})
