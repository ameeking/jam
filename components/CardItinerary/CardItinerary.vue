<template>
  <Card :image="imagePath" :border="border" scale="16:9">
    <template slot="content">
      <div>
        <Chip v-for="category in categories" :key="category.id" :href="categoryHref(category.id)">
          {{ category.title }}
        </Chip>
      </div>
      <h3 class="u-mb--0 u-mt--1">{{ name }}</h3>
      <p>{{ description }}</p>
      <Button class="u-mt--auto" :href="link" type="primary">View itinerary</Button>
    </template>
  </Card>
</template>

<script>
import { Card, Chip, Button } from "~/node_modules/flyweight";

export default {
  name: "CardItinerary",
  components: {
    Card,
    Chip,
    Button,
  },
  props: {
    itinerary: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      border: true
    }
  },
  computed: {
    name() {
      return this.itinerary.title;
    },
    description() {
      if (this.itinerary.body && this.itinerary.value) {
        return this.itinerary.body.value;
      }

      return null;
      
    },
    link() {
      return `/itinerary/${this.itinerary.id}`;
    },
    imagePath() {
      if (this.itinerary.field_image && this.itinerary.field_image.uri) {
        return `${this.$config.baseURL}${this.itinerary.field_image.uri.url}`;
      }

      return null;
    },
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
    categoryHref(id) {
      return `/category/${id}`;
    }
  }
};
</script>
