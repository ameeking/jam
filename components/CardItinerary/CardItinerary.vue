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
      <Button class="u-mt--auto" :href="link" type="primary">View product</Button>
    </template>
  </Card>
</template>

<script>
import { Card, Chip, Button } from "~/node_modules/flyweight";

export default {
  name: "CardItinerary",
  components: {
    'Card': Card,
    'Chip': Chip,
    'Button': Button,
  },
  props: ['id', 'name', 'description', 'image', 'activities'],
  data() {
    return {
      border: true
    }
  },
  computed: {
    categories() {
      let categories = {};

      this.activities.forEach(activity => {
        activity.field_category.forEach(category => {
          categories[category.id] = category;
        })
      })

      return categories;
    },
    imagePath() {
      return `http://drupal-9-headless.lndo.site${this.image.uri.url}`;
    },
    link() {
      return `/product/${this.id}`;
    }
  },
  methods: {
    categoryHref(id) {
      return `/category/${id}`;
    }
  }
};
</script>
