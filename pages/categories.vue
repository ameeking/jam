<template>
  <div class="l-container">
    <Grid>
        <GridCol v-for="category in categories" :key="category.id" xs="2">
          <CardCategory :category="category" />
        </GridCol>
      </Grid>
  </div>
</template>

<script>
import CardCategory from "../components/CardCategory/CardCategory"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  name: "categories",
  components: {
    CardCategory,
    Grid,
    GridCol
  },
  data() {
    return {
      categories: [],
      query: ''
    }
  },
  methods: {
    categoryHref(id) {
      return `/category/${id}`;
    }
  },
  mounted() {
    this.$store.commit('page/setTitle', 'Categories');
    this.$store.commit('page/setBanner', '');
  },
  async asyncData({ $repository }) {
    let categories = await $repository.category.getAllCategories(6);

    return { 
      categories: categories.data
    };
  },
}
</script>
