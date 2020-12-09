<template>
  <Card :image="imagePath" type="left" :href="link">
    <template slot="content">
      <div class="u-type--sm">{{ author }}</div>
      <h3 class="u-mb--0 u-mt--1">{{ title }}</h3>
      <p>This is some example post content that is medium long...</p>
    </template>
  </Card>
</template>

<script>
import { Card, Button } from "~/node_modules/flyweight";

export default {
  name: "CardPost",
  components: {
    'Card': Card,
    'Button': Button,
  },
  props: ['id', 'title', 'author', 'image'],
  computed: {
    imagePath() {
      return `http://drupal-9-headless.lndo.site${this.image.uri.url}`;
    },
    link() {
      return `/post/${this.id}`;
    }
  }
};
</script>
