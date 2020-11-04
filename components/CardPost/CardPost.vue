<template>
  <Card :image="imagePath">
    <template slot="header">
      {{ title }}
    </template>
    <template slot="content">
      <em>By {{ author }}</em>
    </template>
    <template slot="footer">
      <nuxt-link :to="link">
        View post
      </nuxt-link>
    </template>
  </Card>
</template>

<script>
import { Card } from "~/node_modules/flyweight";

export default {
  name: "CardPost",
  components: {
    'Card': Card,
  },
  props: ['id', 'title', 'author', 'image'],
  computed: {
    imagePath() {
      return `http://localhost:1337${this.image.url}`;
    },
    link() {
      return `/post/${this.id}`;
    }
  }
};
</script>
