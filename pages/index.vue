<template>
  <div>
    <div class="l-container">
      <h2>Pick your adventure</h2>
      
      <Grid>
        <GridCol v-for="category in categories" :key="category.id" xs="2">
          <CardCategory 
            :title="category.name" 
            :id="category.id" 
            :image="category.image"
          />
        </GridCol>
      </Grid>
    </div>

    <div class="l-container u-mt--8 u-pt--5 u-pb--8 u-color--gray-ltr">
      <h2 class="u-mt--0">Get inspired</h2>

      <Grid>
        <GridCol v-for="post in posts" :key="post.id" xs="7">
          <CardPost 
            :title="post.title" 
            :id="post.id" 
            :image="post.image" 
            :author="post.author"
          />
        </GridCol>
      </Grid>
    </div>

    <div class="l-container">
      <h2 class="u-mt--8">Popular adventures</h2>
      <Grid>
        <GridCol v-for="product in products" :key="product.id" xs="3">
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
  </div>
</template>

<script>
import productsQuery from "~/apollo/queries/product/products"
import postsQuery from '~/apollo/queries/post/posts'
import categoriesQuery from '~/apollo/queries/category/categories'
import CardCategory from "../components/CardCategory/CardCategory"
import CardPost from "../components/CardPost/CardPost"
import CardProduct from "../components/CardProduct/CardProduct"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  name: "home",
  components: {
    'CardCategory': CardCategory,
    'CardPost': CardPost,
    'CardProduct': CardProduct,
    'Grid': Grid,
    'GridCol': GridCol
  },
  data() {
    return {
      type: 'right',
      categories: [],
      query: ''
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    },
    posts: {
      prefetch: true,
      query: postsQuery
    },
    products: {
      prefetch: true,
      query: productsQuery
    }
  },
  methods: {
    categoryHref(id) {
      return `/category/${id}`;
    }
  },
  computed: {
    filteredList() {
      return this.categories.filter(product => {
        return categories.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
  mounted() {
    this.$store.commit('page/setTitle', '');
    this.$store.commit('page/setBanner', 'https://cdn.pixabay.com/photo/2019/04/22/01/51/south-tyrol-4145438_1280.jpg');
  },
}
</script>
