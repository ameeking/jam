<template>
  <Card :image="imagePath" :border="border" scale="16:9">
    <template slot="content">
      <div>
        <Chip v-for="category in categories" :key="category.id" :href="categoryHref(category.id)">
          {{ category.title }}
        </Chip>
      </div>
      <h3 class="u-mb--0 u-mt--1">{{ name }}</h3>
      <p>{{ description }}</p>
      <Button class="u-mt--auto" :href="link" type="primary">View product</Button>
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
  data() {
    return {
      border: true
    }
  },
  computed: {
    imagePath() {
      return `https://drupal-9-headless.lndo.site${this.image.uri.url}`;
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
