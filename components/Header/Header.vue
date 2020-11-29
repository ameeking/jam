<template>
  <header class="header">
    <Banner :image="image">
      <HeaderBar :menuItems="directories" :inverse="hasImage"> 
        <template slot="logo">
          <Logo :inverse="hasImage" />
        </template>
        <template slot="utilities">
          <Button type="primary">Login</Button>
          <Button type="secondary">Search</Button>
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
          path: '/products',
          name: "Products"
        },
                {
          id: 3,
          path: '/blog',
          name: "Blog"
        },
        {
          id: 4,
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

<style lang="scss">
.header-nav {
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  border-bottom: 1px solid gray;
}

.header__title {
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 7rem;
}

.header__menu  {
  margin-left: auto;
  margin-right: auto;
}

.header__utilities {
  margin-left: auto;
}
</style>