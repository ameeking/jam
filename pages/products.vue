<template>
  <div class="l-container">
    <form>
      <input v-model="query" type="search" placeholder="Search..." />
    </form>

    <br />



    <Grid>
      <GridCol xs="3">
        <strong>Category</strong>
        <div v-for="category in categories" :key="category.id">
          <input type="checkbox" :id="`cat-${category.id}`" :value="category.id" v-model="categoriesModel">
          <label :for="`cat-${category.id}`">{{ category.name }}</label>
        </div>

        <strong class="u-mt--4">Location</strong>
        <div v-for="location in locations" :key="location.id">
          <input type="checkbox" :id="location.id" :value="location.id" v-model="locationsModel">
          <label :for="location.id">{{ location.name }}</label>
        </div>
      </GridCol>
      <GridCol xs="9">
        <Grid>
          <GridCol v-for="product in filteredList" :key="product.id" xs="4">
            <CardProduct
              :name="product.name" 
              :id="product.id" 
              :image="product.image" 
              :description="product.description"
              :categories="product.categories"
            />
          </GridCol>
        </Grid>
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import productsQuery from "~/apollo/queries/product/products"
// import locationsQuery from "~/apollo/queries/location/locations"
// import categoriesQuery from "~/apollo/queries/category/categories"
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
      query: ''
    }
  },
  apollo: {
    products: {
      prefetch: true,
      query: productsQuery
    },
    // locations: {
    //   prefetch: true,
    //   query: locationsQuery
    // },
    // categories: {
    //   prefetch: true,
    //   query: categoriesQuery
    // }
  },
  methods: {
    boo(el) {
      if(this.categoriesModel.indexOf(el.id) !== -1 || this.categoriesModel.length === 0){
        return true;
      }

      return false;
    },
    moo(el) {
      if(this.locationsModel.indexOf(el.id) !== -1 || this.locationsModel.length === 0){
        return true;
      }

      return false;
    }
  },
  computed: {
    filteredList() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.query.toLowerCase()) && product.categories.some(this.boo) && product.locations.some(this.moo)
      })
    },
    categories() {
      let categories = {};

      this.filteredList.forEach(function (product) {
        product.categories.forEach(function (category) {
          categories[category.id] = category;
        })
      });

      return categories;
    },
    locations() {
      let locations = {};

      this.filteredList.forEach(function (product) {
        product.locations.forEach(function (location) {
          locations[location.id] = location;
        })
      });

      return locations;
    }
  },
  mounted() {
    this.$store.commit('page/setTitle', 'Products');
    this.$store.commit('page/setBanner', '');
  },
}
</script>
