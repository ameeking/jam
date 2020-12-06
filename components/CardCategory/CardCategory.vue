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
  props: ['id', 'title', 'image'],
  computed: {
    imagePath() {
      return `https://drupal-9-headless.lndo.site${this.image.uri.url}`;
    },
    link() {
      return `/category/${this.id}`;
    }
  }
};
</script>
