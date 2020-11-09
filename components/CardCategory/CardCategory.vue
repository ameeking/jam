<template>
  <Tile :image="imagePath">
    {{ title }}
  </Tile>
</template>

<script>
import { Tile, Button } from "~/node_modules/flyweight";

export default {
  name: "CardCategory",
  components: {
    'Tile': Tile,
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
