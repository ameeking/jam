import jsonapiParse from 'jsonapi-parse';
import https from 'https';
import qs from 'qs';

export default ($axios, $config) => ({
  async get(uri, params = null) {
    // const agent = new https.Agent({  
    //   rejectUnauthorized: false
    // });

    let query = params ? '?' + qs.stringify(params, { indices: false }) : '';
    let url = `/jsonapi/node/${uri}${query}`;

    let response = await $axios.$get(url);

    return jsonapiParse.parse(response);
  },
});