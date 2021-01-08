<template>
  <Card :image="imagePath" type="left" :href="link">
    <template slot="content">
      <div class="u-type--sm">{{ author }}</div>
      <h3 class="u-mb--0 u-mt--1">{{ title }}</h3>
      <p>{{ body }}</p>
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
  props: {
    post: {
      type: Object,
      required: true
    },
  },
  computed: {
    title() {
      return this.post.title;
    },
    body() {
      if (this.post.body && this.post.body.value) {
        return this.post.body.value;
      }

      return null;
    },
    imagePath() {
      if (this.post.field_image && this.post.field_image.uri) {
        return `${this.$config.baseURL}${this.post.field_image.uri.url}`;
      }
      
      return null;
    },
    link() {
      return `/post/${this.post.id}`;
    },
    author() {
      this.post.uid.display_name
    }
  }
};
</script>
