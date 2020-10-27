<template>
  <main>
    <h1>Products</h1>

    <ul>
      <li v-for="product in products" :key="product.id">
        <a :href="productLink(product.id)"> {{ product.name }} </a>
      </li>
    </ul>

  </main>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "category",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    productLink(id) {
      return `/product/${id}`;
    }
  },
  computed: {
    ...mapState(["storedata"]),

    products() {
      return this.storedata;
    }
  },
};
</script>
