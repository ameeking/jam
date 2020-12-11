<template>
  <div class="l-container">
    <p>{{ country.body.value }}</p>

    <h2>Itineraries</h2>
    
    <Grid>
      <GridCol v-for="itinerary in itineraries" :key="itinerary.id" xs="3">
        <CardItinerary
          :itinerary="itinerary"
        />
      </GridCol>
    </Grid>

    <h2>Activites</h2>

    <Grid>
      <GridCol v-for="activity in activities" :key="activity.id" xs="3">
        <CardActivity :activity="activity" />
      </GridCol>
    </Grid>

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
import CardItinerary from "~/components/CardItinerary/CardItinerary"
import CardActivity from "~/components/CardActivity/CardActivity"
import CardPost from "~/components/CardPost/CardPost"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  data() {
    return {
      country: {},
      activities: [],
      itineraries: [],
      products: [],
      posts: [],
      query: ''
    }
  },
  components: {
    CardItinerary,
    CardActivity,
    CardPost,
    Grid,
    GridCol
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
    let itineraries = await $repository.itinerary.getAllItinerariesByCountry(4, route.params.id);

    // let products = await $repository.product.getAllProductsByLocation(4, route.params.id);
    // let posts = await $repository.post.getAllPostsByLocation(4, route.params.id);

    store.commit('page/setTitle', country.data.title);
    store.commit('page/setBanner', '');

    return { 
      country: country.data,
      activities: activities.data,
      itineraries: itineraries.data
      // products: products.data,
      // posts: posts.data
    };
  },
}
</script>
