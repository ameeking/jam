<template>
  <div class="l-container">
    <p>{{ country.body.value }}</p>

    <h2>Activites</h2>

    <Grid>
      <GridCol v-for="activity in activities" :key="activity.id" xs="3">
        <CardProduct
          :name="activity.title" 
          :id="activity.id" 
          :image="activity.field_image" 
          :description="activity.body.summary"
          :categories="activity.field_category"
        />
      </GridCol>
    </Grid>

    <h2>Itineraries</h2>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <!-- <Grid>
      <GridCol v-for="product in filteredList" :key="product.id" xs="3">
        <CardProduct
          :name="product.title" 
          :id="product.id" 
          :image="product.field_image" 
          :description="product.body.summary"
          :categories="product.field_location"
        />
      </GridCol>
    </Grid> -->

    <!-- <h2>Posts</h2>

    <Grid>
      <GridCol v-for="post in posts" :key="post.id" xs="7">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.field_image"
        />
      </GridCol>
    </Grid> -->
  </div>
</template>

<script>
import CardProduct from "~/components/CardProduct/CardProduct"
import CardPost from "~/components/CardPost/CardPost"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  data() {
    return {
      location: {},
      activities: [],
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
    // filteredList() {
    //   return this.products.filter(product => {
    //     return product.title.toLowerCase().includes(this.query.toLowerCase())
    //   })
    // },
  },
  async asyncData({ $repository, store, route }) {
    let country = await $repository.country.getCountry(route.params.id);
    let activities = await $repository.activity.getAllActivitiesByCountry(4, route.params.id);

    // let products = await $repository.product.getAllProductsByLocation(4, route.params.id);
    // let posts = await $repository.post.getAllPostsByLocation(4, route.params.id);

    store.commit('page/setTitle', country.data.title);
    store.commit('page/setBanner', '');

    console.log(activities.data);

    return { 
      country: country.data,
      activities: activities.data,
      // products: products.data,
      // posts: posts.data
    };
  },
}
</script>
