<template>
  <Card :image="imagePath" :border="border" scale="16:9">
    <template slot="content">
      <div>
        <Chip v-for="category in categories" :key="category.id" :href="categoryHref(category.id)">
          {{ category.title }}
        </Chip>
      </div>
      <h3 class="u-mb--0 u-mt--1">{{ title }}</h3>
      <p>{{ description }}</p>
      <Button class="u-mt--auto" type="primary">View product</Button>
    </template>
  </Card>
</template>

<script>
import { Card, Chip, Button } from "~/node_modules/flyweight";

export default {
  name: "CardArticle",
  components: {
    'Card': Card,
    'Chip': Chip,
    'Button': Button,
  },
  props: {
    activity: {
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
      return this.activity.title;
    },
    description() {
      if (this.activity.body && this.activity.value) {
        return this.activity.body.value;
      }

      return null;
    },
    imagePath() {
      if (this.activity.field_hero_image && this.activity.field_hero_image.uri) {
        return `${this.$config.baseURL}${this.activity.field_hero_image.uri.url}`;
      }

      return null;
    },
    link() {
      return `/product/${this.activity.id}`;
    },
    categories() {
      let categories = {};

      this.activity.field_category.forEach(category => {
        categories[category.id] = category;
      })

      return categories;
    }
  },
  methods: {
    categoryHref(id) {
      return `/category/${id}`;
    }
  }
};
</script>
