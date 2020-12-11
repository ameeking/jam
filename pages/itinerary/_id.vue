<template>
  <div class="l-container">
    <Chip v-for="category in categories" :key="category.id" :href="categoryHref(category.id)">
      {{ category.title }}
    </Chip>

    <p>{{ itinerary.body.value }}</p>

    <Grid>
      <GridCol xs="12" v-for="(activity, index) in itinerary.field_activity" :key="activity.id">
        <h2>Day {{ index + 1 }} - {{ activity.field_location.title }}</h2>
        <Card :image="activityImage(activity)" type="left" scale="16:9">
          <template slot="content">
            <h3 class="u-mb--0 u-mt--1">{{ activity.title }}</h3>
            {{ activity.body.value }}
          </template>
        </Card>
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import { Grid, GridCol, Card, Chip } from "~/node_modules/flyweight";

export default {
  components: {
    Grid,
    GridCol,
    Card,
    Chip
  },
  data() {
    return {
      itinerary: {}
    }
  },
  computed: {
    categories() {
      let categories = {};

      this.itinerary.field_activity.forEach(activity => {
        activity.field_category.forEach(category => {
          categories[category.id] = category;
        })
      })

      return categories;
    },
  },
  methods: {
    activityImage(activity) {
      return `http://drupal-9-headless.lndo.site${activity.field_image.uri.url}`
    },
    categoryHref(id) {
      return `/category/${id}`;
    }
  },
  async asyncData({ $repository, store, route }) {
    let itinerary = await $repository.itinerary.getItinerary(route.params.id);

    store.commit('page/setTitle', itinerary.data.title);
    store.commit('page/setBanner', '');

    return {
      itinerary: itinerary.data
    };
  },
}
</script>
