<template>
  <nav class="navigation">
      <ul class="navigation__items">
        <li class="navigation__item">
          <nuxt-link to="/" class="navigation__home">
            <slot></slot>
          </nuxt-link>
        </li>
        <li class="navigation__item" v-for="directory in directories" :key="directory.id">
          <nuxt-link :to="directory.path">
            {{ directory.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: "Navigation",
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
          path: '/categories',
          name: "Categories"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.navigation__items {
  margin: 0;
  padding: 0;
}

.navigation__item {
  display: inline;
  padding: 0 1rem 0 0;
}

.navigation__home {
  text-decoration: none;
}
</style>