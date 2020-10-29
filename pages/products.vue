<template>
  <div>
    <h1>Products</h1>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <div class="grid">
      <div class="grid__col" v-for="product in filteredList" :key="product.id">
        <Card 
          :name="product.name" 
          :id="product.id" 
          :image="product.image" 
          :description="product.description"
          :categories="product.categories"
        />
      </div>
    </div>
  </div>
</template>

<script>
import productsQuery from '~/apollo/queries/product/products'
import Card from "../components/Card/Card"

export default {
  name: "products",
  components: {
    'Card': Card
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
  }
}
</script>
