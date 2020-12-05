/**
 * Client for JSON API server.
 * We use "jsonapi-parse" package to format responses :
 * It resolves relationships and included objects nicely in the final data object.
 */
import jsonapiParse from 'jsonapi-parse';
import axios from 'axios';
import https from 'https'
import qs from 'qs';

// //Add a response interceptor to format response with jsonapi-parse
// axios.interceptors.response.use(response => {
//   return jsonapiParse.parse(response.data).data;
// });

export default {
  get: async (url) => {
    let response = await axios.get(
      `https://drupal-9-headless.lndo.site/jsonapi${url}`,
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      }
    );

    return jsonapiParse.parse(response.data).data;
  },
};