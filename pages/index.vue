<template>
  <div>
    <div class="l-container">
      <h2>Pick your adventure</h2>
      
      <Grid>
        <GridCol v-for="category in categories" :key="category.id" xs="2">
          <CardCategory :category="category" />
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
            :image="post.field_image"
          />
        </GridCol>
      </Grid>
    </div>

    <div class="l-container">
      <h2 class="u-mt--8">Popular adventures</h2>
      <Grid>
        <GridCol v-for="product in products" :key="product.id" xs="3">
          <CardProduct
            :name="product.title" 
            :id="product.id" 
            :image="product.field_image" 
            :description="product.body.summary"
            :categories="product.field_category"
          />
        </GridCol>
      </Grid>
    </div>
  </div>
</template>

<script>
import CardCategory from "../components/CardCategory/CardCategory"
import CardPost from "../components/CardPost/CardPost"
import CardProduct from "../components/CardProduct/CardProduct"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  name: "index",
  components: {
    CardCategory,
    CardPost,
    CardProduct,
    Grid,
    GridCol
  },
  data() {
    return {
      type: 'right',
      categories: [],
      posts: [],
      products: [],
      query: ''
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
  async asyncData({ $repository }) {
    let products = await $repository.product.getAllProducts(4);
    let categories = await $repository.category.getAllCategories(6);
    let posts = await $repository.post.getAllPosts(2);

    return { 
      categories: categories.data,
      products: products.data,
      posts: posts.data
    };
  },
}
</script>
