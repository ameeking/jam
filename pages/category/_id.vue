<template>
  <div class="l-container">
    <p>{{ category.body.value }}</p>

    <h2>Itineraries</h2>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <Grid>
      <GridCol v-for="itinerary in itineraries" :key="itinerary.id" xs="3">
        <CardItinerary
          :name="itinerary.title" 
          :id="itinerary.id" 
          :image="itinerary.field_image" 
          :description="itinerary.body.value"
          :activities="itinerary.field_activity"
        />
      </GridCol>
    </Grid>

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

    <h2>Posts</h2>

    <Grid>
      <GridCol v-for="post in posts" :key="post.id" xs="7">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.field_image"
          :author="post.uid.display_name"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import CardItinerary from "~/components/CardItinerary/CardItinerary"
import CardProduct from "~/components/CardProduct/CardProduct"
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
    CardProduct,
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
  },
  async asyncData({ $repository, store, route }) {
    let category = await $repository.category.getCategory(route.params.id);
    let itineraries = await $repository.itinerary.getAllItinerariesByCategory(4, route.params.id);
    let activities = await $repository.activity.getAllActivitiesByCategory(4, route.params.id);
    let posts = await $repository.post.getAllPostsByCategory(4, route.params.id);

    console.log(activities);

    // console.log(itineraries);
    store.commit('page/setTitle', category.title);
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
