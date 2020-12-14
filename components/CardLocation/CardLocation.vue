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
      console.log(this.location);

      if (this.location.field_image && this.location.field_image.uri) {
        return `http://drupal-9-headless.lndo.site${this.location.field_image.uri.url}`;
      }

      return null;
    },
    link() {
      return `/location/${this.location.id}`;
    }
  }
};
</script>
