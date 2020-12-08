<template>
  <div class="l-container">
    <Grid>
        <GridCol v-for="category in categories" :key="category.id" xs="2">
          <CardCategory 
            :title="category.title" 
            :id="category.id" 
            :image="category.field_image"
          />
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
  computed: {
    filteredList() {
      return this.categories.filter(product => {
        return categories.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
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
