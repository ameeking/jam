<template>
  <div>
    <h1>Categories</h1>

    <ul>
      <li v-for="item in categories" :key="item.id">
        <nuxt-link :to="categoryHref(item.id)">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'

export default {
  name: "categories",
  data() {
    return {
      categories: [],
      query: ''
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
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
  }
}
</script>
