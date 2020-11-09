<template>
  <Card :image="imagePath" :href="link">
    <template slot="content">
      <span class="u-type--sm u-type--base-lt" 
        v-for="category in categories" :key="category.id" :href="categoryHref(category.id)">
        {{ category.name }}
      </span>
      <h3 class="u-mb--0 u-mt--1">{{ name }} and some extra long text to make this amazing</h3>
    </template>
  </Card>
</template>

<script>
import { Card, Chip, Button } from "~/node_modules/flyweight";

export default {
  name: "CardProduct",
  components: {
    'Card': Card,
    'Chip': Chip,
    'Button': Button,
  },
  props: ['id', 'name', 'description', 'image', 'categories'],
  computed: {
    imagePath() {
      return `http://localhost:1337${this.image.url}`;
    },
    link() {
      return `/product/${this.id}`;
    }
  },
  methods: {
    categoryHref(id) {
      return `/category/${id}`;
    }
  }
};
</script>
