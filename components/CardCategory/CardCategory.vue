<template>
  <Card :image="imagePath" :href="link" scale="9:16" border>
    <template slot="content">
      {{ title }}
    </template>
  </Card>
</template>

<script>
import { Card, Button } from "~/node_modules/flyweight";

export default {
  name: "CardCategory",
  components: {
    'Card': Card,
    'Button': Button
  },
  props: {
    category: {
      type: Object,
      required: true
    },
  },
  computed: {
    title() {
      return this.category.title;
    },
    imagePath() {
      if (this.category.field_image) {
        return `http://drupal-9-headless.lndo.site${this.category.field_image.uri.url}`;
      }
      
      return null;
    },
    link() {
      return `/category/${this.category.id}`;
    }
  }
};
</script>
