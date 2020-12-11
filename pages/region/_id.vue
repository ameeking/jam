<template>
  <div class="l-container">
    <p>{{ region.body.value }}</p>

    <h2>Itineraries</h2>

    <Grid>
      <GridCol v-for="itinerary in itineraries" :key="itinerary.id" xs="3">
        <CardItinerary :itinerary="itinerary"/>
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
import CardActivity from "~/components/CardActivity/CardActivity"
import CardItinerary from "~/components/CardItinerary/CardItinerary"
import CardPost from "~/components/CardPost/CardPost"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  data() {
    return {
      country: {},
      activities: [],
      products: [],
      posts: [],
      query: ''
    }
  },
  components: {
    CardActivity,
    CardItinerary,
    CardPost,
    Grid,
    GridCol
  },
  async asyncData({ $repository, store, route }) {
    let region = await $repository.region.getRegion(route.params.id);
    let activities = await $repository.activity.getAllActivitiesByRegion(4, route.params.id);
    let itineraries = await $repository.itinerary.getAllItinerariesByRegion(4, route.params.id);

    // let posts = await $repository.post.getAllPostsByLocation(4, route.params.id);

    store.commit('page/setTitle', region.data.title);
    store.commit('page/setBanner', '');

    return { 
      region: region.data,
      activities: activities.data,
      itineraries: itineraries.data,
      // posts: posts.data
    };
  },
}
</script>
