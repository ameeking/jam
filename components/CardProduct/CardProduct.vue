<template>
  <Card :image="imagePath">
    <template slot="header">
      {{ name }}
    </template>
    <template slot="content">
      <Chip 
        v-for="category in categories" :key="category.id" :href="categoryHref(category.id)">
        {{ category.name }}
      </Chip>
      <p>{{ description }}</p>
    </template>
    <template slot="footer">
      <nuxt-link :to="link">
        View product
      </nuxt-link>
    </template>
  </Card>
</template>

<script>
import { Card, Chip } from "~/node_modules/flyweight";

export default {
  name: "CardProduct",
  components: {
    'Card': Card,
    'Chip': Chip,
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
