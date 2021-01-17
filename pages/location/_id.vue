<template>
  <div class="l-container">
    <p>{{ body }}</p>

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
import CardActivity from "~/components/CardActivity/CardActivity"
import CardItinerary from "~/components/CardItinerary/CardItinerary"
import CardPost from "~/components/CardPost/CardPost"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  components: {
    CardItinerary,
    CardActivity,
    CardPost,
    Grid,
    GridCol
  },
  data() {
    return {
      location: {},
      itineraries: [],
      activities: [],
      products: [],
      posts: [],
      query: ''
    }
  },
  computed: {
    body() {
      if (this.location && this.location.body && this.location.body.value) {
        return this.location.body.value;
      }
      
      return null;
    },
  },
  async asyncData({ $repository, store, route }) {
    let location = await $repository.location.getLocation(route.params.id);
    let activities = await $repository.activity.getAllActivitiesByLocation(4, route.params.id);
    let posts = await $repository.post.getAllPostsByLocation(4, route.params.id);

    store.commit('page/setTitle', location.data.title); 
    store.commit('page/setBanner', '');

    return { 
      location: location.data,
      activities: activities.data,
      posts: posts.data
    };
  },
}
</script>
