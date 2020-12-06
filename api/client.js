import jsonapiParse from 'jsonapi-parse';
import axios from 'axios';
import qs from 'qs';

// //Add a response interceptor to format response with jsonapi-parse
// axios.interceptors.response.use(response => {
//   return jsonapiParse.parse(response.data).data;
// });

export default {
  get: async (uri, params = null) => {
    let query = params ? '?' + qs.stringify(params, { indices: false }) : '';
    let url = `${process.env.API_URL}${uri}${query}`
    let response = await axios.get(url);

    return jsonapiParse.parse(response.data).data;
  },
};