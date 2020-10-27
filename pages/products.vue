<template>
  <main>
    <h1>Products</h1>

    <p>This lists out all our products</p>

  <v-container>
    <v-row>
      <v-col
        class="d-flex child-flex"
        v-for="product in products" 
        :key="product.id"
        cols="12"
        sm="4"
      >
        <ProductCard :name="product.name" :id="product.id" :image="product.image" />
      </v-col>
    </v-row>
  </v-container>
  </main>
</template>
<script>
import { mapState } from "vuex";
import ProductCard from "../components/ProductCard/ProductCard"

export default {
  name: "category",
  components: {
    'ProductCard': ProductCard
  },
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
