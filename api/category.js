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
  }
})
