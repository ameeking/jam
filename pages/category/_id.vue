<template>
  <div class="l-container">
    <p>{{ category.description }}</p>

    <h2>Products</h2>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
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

    <h2>Posts</h2>

    <Grid>
      <GridCol v-for="post in category.posts" :key="post.id" xs="7">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.image" 
          :author="post.author"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/category/category'
import CardProduct from "~/components/CardProduct/CardProduct"
import CardPost from "~/components/CardPost/CardPost"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  data() {
    return {
      category: [],
      query: ''
    }
  },
  components: {
    'CardProduct': CardProduct,
    'CardPost': CardPost,
    'Grid': Grid,
    'GridCol': GridCol
  },
  computed: {
    filteredList() {
      if (this.category.hasOwnProperty('products')) {
        return this.category.products.filter(product => {
          return product.name.toLowerCase().includes(this.query.toLowerCase())
        })
      }
    },
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  created() {
    this.$store.commit('page/setTitle', this.category.name)
  },
}
</script>
