<template>
  <div class="l-container">
    <p>{{ category.body.value }}</p>

    <h2>Products</h2>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <Grid>
      <GridCol v-for="product in filteredList" :key="product.id" xs="3">
        <CardProduct
          :name="product.title" 
          :id="product.id" 
          :image="product.field_image" 
          :description="product.body.summary"
          :categories="product.field_category"
        />
      </GridCol>
    </Grid>

    <h2>Posts</h2>

    <Grid>
      <GridCol v-for="post in posts" :key="post.id" xs="7">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.field_image"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import CardProduct from "~/components/CardProduct/CardProduct"
import CardPost from "~/components/CardPost/CardPost"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  data() {
    return {
      category: {},
      products: [],
      posts: [],
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
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
  async asyncData({ $repository, store, route }) {
    let category = await $repository.category.getCategory(route.params.id);
    let products = await $repository.product.getAllProductsByCategory(4, route.params.id);
    let posts = await $repository.post.getAllPostsByCategory(4, route.params.id);

    store.commit('page/setTitle', category.title);
    store.commit('page/setBanner', `https://drupal-9-headless.lndo.site${category.field_image.uri.url}`);

    return { 
      category: category,
      products: products,
      posts: posts
    };
  },
}
</script>
