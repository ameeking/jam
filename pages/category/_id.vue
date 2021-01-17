<template>
  <div class="l-container">
    <p>{{ body }}</p>

    <h2 class="u-mt--10">Activites</h2>

    <Grid>
      <GridCol v-for="activity in activities" :key="activity.id" xs="3">
        <CardActivity :activity="activity" />
      </GridCol>
    </Grid>

    <h2 class="u-mt--10">Posts</h2>

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
    body() {
      if (this.category.body && this.category.body.value) {
        return this.category.body.value;
      }
      
      return null;
    },
  },
  async asyncData({ $repository, store, route, $config }) {
    let category = await $repository.category.getCategory(route.params.id);
    let activities = await $repository.activity.getAllActivitiesByCategory(4, route.params.id);
    let posts = await $repository.post.getAllPostsByCategory(4, route.params.id);

    store.commit('page/setTitle', category.data.title);
    store.commit('page/setBanner', `${$config.baseURL}${category.data.field_hero_image.uri.url}`);

    return { 
      category: category.data,
      activities: activities.data,
      posts: posts.data
    };
  },
}
</script>
