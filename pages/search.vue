<template>
  <div class="l-container">
    <form class="u-mb--5">
      <input v-model="query" type="search" placeholder="Search..." />
    </form>

    <Grid>
      <GridCol xs="3">
        <strong>Category</strong>
        <div v-for="category in categories" :key="category.id">
          <input type="checkbox" :id="`cat-${category.id}`" :value="category.id" v-model="categoriesModel">
          <label :for="`cat-${category.id}`">{{ category.title }}</label>
        </div>

        <strong class="u-mt--4">Location</strong>
        <div v-for="location in locations" :key="location.id">
          <input type="checkbox" :id="location.id" :value="location.id" v-model="locationsModel">
          <label :for="location.id">{{ location.title }}</label>
        </div>
      </GridCol>
      <GridCol xs="9">
        <Grid>
          <GridCol v-for="product in filteredProducts" :key="product.id" xs="4">
            <CardProduct
              :name="product.title" 
              :id="product.id" 
              :image="product.field_image" 
              :description="product.body.summary"
              :categories="product.field_category"
            />
          </GridCol>
        </Grid>
        <nuxt-link
              :to="{
                name: 'search',
                query: { page: this.previousPage }
              }">
              Back
        </nuxt-link>
        <nuxt-link
              :to="{
                name: 'search',
                query: { page: this.nextPage }
              }">
              Next
        </nuxt-link>
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import CardProduct from "../components/CardProduct/CardProduct"
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  name: "products",
  components: {
    'CardProduct': CardProduct,
    'Grid': Grid,
    'GridCol': GridCol
  },
  data() {
    return {
      products: [],
      categoriesModel: [],
      locationsModel: [],
      query: '',
      page: 0
    }
  },
  methods: {
    matchesCategoriesModel(el) {
      if(this.categoriesModel.indexOf(el.id) !== -1 || this.categoriesModel.length === 0) {
        return true;
      }

      return false;
    },
    matchesLocationsModel(el) {
      if(this.locationsModel.indexOf(el.id) !== -1 || this.locationsModel.length === 0) {
        return true;
      }

      return false;
    }
  },
  computed: {
    nextPage() {
      return this.page + 1;
    },
    previousPage() {
      return this.page - 1;
    },
    filteredProducts() {
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.query.toLowerCase()) 
        && product.field_category.some(this.matchesCategoriesModel) 
        && product.field_destination.some(this.matchesLocationsModel)
      })
    },
    categories() {
      let categories = {};

      this.filteredProducts.forEach(function (product) {
        product.field_category.forEach(function (category) {
          categories[category.id] = category;
        })
      });

      return categories;
    },
    locations() {
      let locations = {};

      this.filteredProducts.forEach(function (product) {
        product.field_destination.forEach(function (location) {
          locations[location.id] = location;
        })
      });

      return locations;
    }
  },
  mounted() {
    this.$store.commit('page/setTitle', 'Search');
    this.$store.commit('page/setBanner', '');
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    if (this.$route.query.page) {
      this.page = parseInt(this.$route.query.page);
    }
    else {
      this.page = 0;
    }

    let response = await this.$repository.product.getAllProducts(1, this.page);
    
    this.products = response.data;
  },
}
</script>
