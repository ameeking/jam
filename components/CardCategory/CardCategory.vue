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
      if (this.category.field_hero_image) {
        return `${this.$config.baseURL}${this.category.field_hero_image.uri.url}`;
      }
      
      return null;
    },
    link() {
      return `/category/${this.category.id}`;
    }
  }
};
</script>
