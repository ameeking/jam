<template>
  <Card :image="imagePath" :border="border" scale="1:1" :href="link">
    <template slot="content">
      <h3 class="u-mb--0 u-mt--1">{{ title }}</h3>
    </template>
  </Card>
</template>

<script>
import { Card, Button } from "~/node_modules/flyweight";

export default {
  name: "CardLocation",
  components: {
    'Card': Card,
    'Button': Button,
  },
  props: {
    location: {
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
    title() {
      return this.location.title;
    },
    description() {
      if (this.location.body && this.location.value) {
        return this.location.body.value;
      }

      return null;
    },
    imagePath() {
      if (this.location.field_hero_image && this.location.field_hero_image.uri) {
        return `${this.$config.baseURL}${this.location.field_hero_image.uri.url}`;
      }

      return null;
    },
    link() {
      return `/location/${this.location.id}`;
    }
  }
};
</script>
