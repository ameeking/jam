<template>
  <Card :image="imagePath" :href="link" scale="9:16" border="true">
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
      return `http://localhost:1337${this.image.url}`;
    },
    link() {
      return `/category/${this.id}`;
    }
  }
};
</script>
