<template>
  <nav :class="computedClasses">
    <ul class="navigation__items">
      <li class="navigation__item">
        <nuxt-link to="/" class="navigation__home">
          <slot></slot>
        </nuxt-link>
      </li>
      <li class="navigation__item" v-for="directory in directories" :key="directory.id">
        <nuxt-link :to="directory.path" class="navigation__link">
          {{ directory.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    inverse: {
      type: Boolean,
      required: false,
      default: false
    },
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
    computedClasses() {
      return [
        'navigation',
        this.inverse ? 'navigation--inverse' : null
      ]
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/flyweight/src/scss/variables.scss";

.navigation__items {
  margin: 0;
  padding: 0;
}

.navigation__item {
  display: inline;
  padding: 0 2rem 0 0;
}

.navigation__link {
  color: $clr-base;
}

.navigation__home {
  text-decoration: none;
}

.navigation--inverse {
  .navigation__link {
    color: $clr-ntrl-min;
  }
}
</style>