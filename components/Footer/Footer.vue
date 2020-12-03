<template>
  <footer class="footer u-color--gray-ltr u-pt--5 u-pb--5">
    <div class="l-container">
      <Grid>
        <GridCol xs="3">
          <Logo />
        </GridCol>
        <GridCol xs="2">
          <strong>Information</strong>
          <ul class="u-list--style-none u-type--sm">
            <li>
              <nuxt-link class="u-type--base-lt" to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link class="u-type--base-lt" to="/blog">Blog</nuxt-link>
            </li>
          </ul>
        </GridCol>
        <GridCol xs="2">
          <strong>Destinations</strong>
          <ul class="u-list--style-none u-type--sm">
            <li v-for="location in locations" :key="location.id">
              <span class="u-type--base-lt">{{ location.name }}</span>
            </li>
          </ul>
        </GridCol>
        <GridCol xs="2">
          <strong>Styles</strong>
          <ul class="u-list--style-none u-type--sm">
            <li v-for="category in categories" :key="category.id">
              <nuxt-link class="u-type--base-lt" :to="`/category/${category.id}`">{{ category.name }}</nuxt-link>
            </li>
          </ul>
        </GridCol>
      </Grid>
      <hr />
      <p class="u-type--base-lt u-type--sm">
        © 2020 Jam. All rights reserved. Feel free to do whatever you like to this.
      </p>
    </div>
  </footer>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories"
import locationsQuery from "~/apollo/queries/location/locations"

import { Grid, GridCol, Button } from "~/node_modules/flyweight";
import Logo from '../Logo/Logo';

export default {
  name: "Footer",
  components: {
    'Grid': Grid,
    'GridCol': GridCol,
    'Logo': Logo,
    'Button': Button
  },
  data() {
    return {
    }
  },
  apollo: {
    locations: {
      prefetch: true,
      query: locationsQuery
    },
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">

</style>