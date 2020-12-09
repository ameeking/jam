import jsonapiParse from 'jsonapi-parse';
import qs from 'qs';

export default ($axios, $config) => ({
  
  async get(uri, params = null) {
    let query = params ? '?' + qs.stringify(params, { indices: false }) : '';
    let url = `${$config.apiURL}${uri}${query}`;

    console.log(url);

    let response = await $axios.$get(url);

    return jsonapiParse.parse(response);
  },
});