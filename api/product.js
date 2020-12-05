import api from './api';

export function getAllProducts() {
  return api.get('/node/product?include=field_image,field_category');
}