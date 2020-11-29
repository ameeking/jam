<template>
  <div class="l-container">
    <form>
      <input v-model="query" type="search" placeholder="Search..." />
    </form>

    <br />

    <Grid>
      <GridCol v-for="product in filteredList" :key="product.id" xs="3">
        <CardProduct
          :name="product.name" 
          :id="product.id" 
          :image="product.image" 
          :description="product.description"
          :categories="product.categories"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import productsQuery from "~/apollo/queries/product/products"
import CardProduct from "../components/CardProduct/CardProduct"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  name: "products",
  components: {
    'CardProduct': CardProduct,
    'Grid': Grid,
    'GridCol': GridCol
  },
  data() {
    return {
      products: [],
      query: ''
    }
  },
  apollo: {
    products: {
      prefetch: true,
      query: productsQuery
    }
  },
  computed: {
    filteredList() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
  mounted() {
    this.$store.commit('page/setTitle', 'Products');
    this.$store.commit('page/setBanner', '');
  },
}
</script>
