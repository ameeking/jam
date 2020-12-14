<template>
  <div>

    <div class="l-container">
      <p>{{ body }}</p>
    </div>

    <div class="l-container u-mt--8 u-pt--5 u-pb--8 u-color--gray-ltr" v-if="locations.length > 0">
      <h2>Locations</h2>

      <Grid>
        <GridCol v-for="location in locations" :key="location.id" xs="2">
          <CardLocation :location="location" />
        </GridCol>
      </Grid>
    </div>

    <div class="l-container" v-if="itineraries.length > 0">
      <h2>Itineraries</h2>

      <Grid>
        <GridCol v-for="itinerary in itineraries" :key="itinerary.id" xs="3">
          <CardItinerary :itinerary="itinerary"/>
        </GridCol>
      </Grid>
    </div>

    <div class="l-container" v-if="activities.length > 0">
      <h2>Activites</h2>

      <Grid>
        <GridCol v-for="activity in activities" :key="activity.id" xs="3">
          <CardActivity :activity="activity" />
        </GridCol>
      </Grid>
    </div>

    <div class="l-container u-mt--8 u-pt--5 u-pb--8 u-color--gray-ltr" v-if="posts.length > 0">
      <h2>Posts</h2>

      <Grid>
        <GridCol v-for="post in posts" :key="post.id" xs="7">
          <CardPost :post="post" />
        </GridCol>
      </Grid>
    </div>

    
  </div>
</template>

<script>
import CardActivity from "~/components/CardActivity/CardActivity"
import CardItinerary from "~/components/CardItinerary/CardItinerary"
import CardPost from "~/components/CardPost/CardPost"
import CardLocation from "~/components/CardLocation/CardLocation"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  data() {
    return {
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
    CardLocation,
    Grid,
    GridCol
  },
  computed: {
    body() {
      if (this.region.body && this.region.body.value) {
        return this.region.body.value
      }
      
      return null;
    }
  },
  async asyncData({ $repository, store, route }) {
    let region = await $repository.region.getRegion(route.params.id);
    let activities = await $repository.activity.getAllActivitiesByRegion(4, route.params.id);
    let itineraries = await $repository.itinerary.getAllItinerariesByRegion(4, route.params.id);
    let posts = await $repository.post.getAllPostsByRegion(4, route.params.id);
    let locations = await $repository.location.getAllLocationsByRegion(4, route.params.id)

    store.commit('page/setTitle', region.data.title);
    store.commit('page/setBanner', '');

    return { 
      region: region.data,
      activities: activities.data,
      itineraries: itineraries.data,
      posts: posts.data,
      locations: locations.data,
    };
  },
}
</script>
