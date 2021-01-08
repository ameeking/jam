<template>
  <footer class="footer u-color--gray-ltr u-pt--5 u-pb--5">
    <div class="l-container">
      <Grid>
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
          <strong>Regions</strong>
          <ul class="u-list--style-none u-type--sm">
            <li v-for="region in regions.data" :key="region.id">
              <nuxt-link class="u-type--base-lt" :to="`/region/${region.id}`">{{ region.title }}</nuxt-link>
            </li>
          </ul>
        </GridCol>
        <GridCol xs="2">
          <strong>Locations</strong>
          <ul class="u-list--style-none u-type--sm">
            <li v-for="location in locations.data" :key="location.id">
              <nuxt-link class="u-type--base-lt" :to="`/location/${location.id}`">{{ location.title }}</nuxt-link>
            </li>
          </ul>
        </GridCol>
        <GridCol xs="2">
          <strong>Styles</strong>
          <ul class="u-list--style-none u-type--sm">
            <li v-for="category in categories.data" :key="category.id">
              <nuxt-link class="u-type--base-lt" :to="`/category/${category.id}`">{{ category.title }}</nuxt-link>
            </li>
          </ul>
        </GridCol>
      </Grid>
      <hr class="u-mb--4" />
      <Grid>
        <GridCol xs="3">
          <Logo />
        </GridCol>
        <GridCol xs="9">
          <p class="u-type--base-lt u-type--sm">
            © 2020 Jam. Feel free to do whatever you like to this.
          </p>
        </GridCol>
      </Grid>
    </div>
  </footer>
</template>

<script>
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
      locations: {},
      regions: {},
      categories: {}
    }
  },
  async fetch () {
    this.categories = await this.$repository.category.getAllCategories();
    this.locations = await this.$repository.location.getAllLocations(10);
    this.regions = await this.$repository.region.getAllRegions(10);
  }
}
</script>