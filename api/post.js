export default (api) =>({
  getPost(uuid) {
    const params = {
      filter: {
        status: {
          value: 1
        }
      },
      include: 'field_image,field_category',
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
      include: 'field_image,field_category',
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
      include: 'field_image,field_category',
    }
  
    return api.get('post', params);
  }
})
