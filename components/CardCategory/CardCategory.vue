<template>
  <Card :image="imagePath">
    <template slot="header">
      {{ title }}
    </template>
    <template slot="footer">
      <nuxt-link :to="link">
        View category
      </nuxt-link>
    </template>
  </Card>
</template>

<script>
import { Card } from "~/node_modules/flyweight";

export default {
  name: "CardCategory",
  components: {
    'Card': Card,
  },
  props: ['id', 'title', 'image'],
  computed: {
    imagePath() {
      return `http://localhost:1337${this.image.url}`;
    },
    link() {
      return `/category/${this.id}`;
    }
  }
};
</script>
