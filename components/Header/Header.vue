<template>
  <header class="header">
    <Banner :image="image">
      <HeaderBar :menuItems="directories" :inverse="hasImage"> 
        <template slot="logo">
          <Logo :inverse="hasImage" />
        </template>
        <template slot="utilities">
          <Button href="/search" type="secondary">Search</Button>
        </template>
      </HeaderBar>
      <h1 :class="titleClass">{{ title }}</h1>
    </Banner>
  </header>
</template>

<script>
import { HeaderBar, Banner, Button } from "~/node_modules/flyweight";
import Logo from '../Logo/Logo';

export default {
  name: "Header",
  components: {
    'Banner': Banner,
    'HeaderBar': HeaderBar,
    'Logo': Logo,
    'Button': Button
  },
  data() {
    return {
      directories: [
        {
          id: 1,
          path: '/about',
          name: "About"
        },
        {
          id: 2,
          path: '/blog',
          name: "Blog"
        },
        {
          id: 3,
          path: '/categories',
          name: "Categories"
        }
      ]
    };
  },
  computed: {
    image() {
      return this.$store.getters['page/getBanner']
    },
    title() {
      return this.$store.getters['page/getTitle']
    },
    hasImage() {
      if (this.image) {
        return true;
      }

      return false;
    },
    titleClass() {
      return [
        'l-container',
        this.hasImage ? 'u-mt--auto u-type--ntrl-min' : null
      ]
    }
  }
}
</script>
