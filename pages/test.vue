<template>
  <div class="l-container">
    {{ products }}
  </div>
</template>

<script>
import { getAllProducts } from '../api/product';
import jsonapiParse from 'jsonapi-parse';
import https from 'https'

export default {
  name: "test",
  data() {
    return {
      products: [],
    }
  },
  methods: {
    async getProducts() {
      this.products = await getAllProducts();
    },
  },
  mounted() {
    // this.getProducts();
  },
  async asyncData({ $axios }) {
    // let boo = await $axios.get(
    //   'https://drupal-9-headless.lndo.site/jsonapi/node/product?include=field_image,field_category',
    //   {
    //     httpsAgent: new https.Agent({
    //       rejectUnauthorized: false
    //     })
    //   }
    // );

    let boo = await getAllProducts();

    console.log(boo.data);

    return { products: boo.data };
  },
}
</script>
