<template>
  <div class="l-container">
    <p>{{ body }}</p>

    <h2>Itineraries</h2>

    <Grid>
      <GridCol v-for="itinerary in itineraries" :key="itinerary.id" xs="3">
        <CardItinerary :itinerary="itinerary" />
      </GridCol>
    </Grid>

    <h2>Activites</h2>

    <Grid>
      <GridCol v-for="activity in activities" :key="activity.id" xs="3">
        <CardActivity :activity="activity" />
      </GridCol>
    </Grid>

    <h2>Posts</h2>

    <Grid>
      <GridCol v-for="post in posts" :key="post.id" xs="7">
        <CardPost :post="post" />
      </GridCol>
    </Grid>
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
      category: {},
      itineraries: [],
      activities: [],
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
    filteredList() {
      return this.itinerary.filter(itinerary => {
        return itinerary.title.toLowerCase().includes(this.query.toLowerCase())
      })
    },
    body() {
      if (this.category.body && this.category.body.value) {
        return this.category.body.value;
      }
      
      return null;
    },
  },
  async asyncData({ $repository, store, route }) {
    let category = await $repository.category.getCategory(route.params.id);
    let itineraries = await $repository.itinerary.getAllItinerariesByCategory(4, route.params.id);
    let activities = await $repository.activity.getAllActivitiesByCategory(4, route.params.id);
    let posts = await $repository.post.getAllPostsByCategory(4, route.params.id);

    store.commit('page/setTitle', category.data.title);
    store.commit('page/setBanner', `http://drupal-9-headless.lndo.site${category.data.field_image.uri.url}`);

    return { 
      category: category.data,
      itineraries: itineraries.data,
      activities: activities.data,
      posts: posts.data
    };
  },
}
</script>
