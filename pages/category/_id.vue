<template>
  <div>
    <h1>{{ category.name }}</h1>

    <p>{{ category.description }}</p>

    <h2>Products</h2>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <div class="grid">
      <div class="grid__col" v-for="product in filteredList" :key="product.id">
        <Card 
          :name="product.name" 
          :id="product.id" 
          :image="product.image" 
          :description="product.description"
          :categories="product.categories"
        />
      </div>
    </div>

    <h2>Posts</h2>

    <div class="grid">
      <div class="grid__col" v-for="post in category.posts" :key="post.id">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.image" 
          :author="post.author"
        />
      </div>
    </div>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/category/category'
import Card from "~/components/Card/Card"
import CardPost from "~/components/CardPost/CardPost"

export default {
  data() {
    return {
      category: [],
      query: ''
    }
  },
  components: {
    'Card': Card,
    'CardPost': CardPost
  },
  computed: {
    filteredList() {
      if (this.category.hasOwnProperty('products')) {
        return this.category.products.filter(product => {
          return product.name.toLowerCase().includes(this.query.toLowerCase())
        })
      }
    },
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
