<template>
  <div>
    <h1>Products</h1>

    <p>This lists out all our products</p>

    <div class="grid">
      <div class="grid__col" v-for="product in products" :key="product.id">
        <Card :name="product.name" :id="product.id" :image="product.image" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Card/Card"

export default {
  name: "category",
  components: {
    'Card': Card
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

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
</style>