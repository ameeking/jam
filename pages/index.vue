<template>
  <div>
    <h1>Welcome</h1>
    <p>This is an example of Jamstack site using commonly used content structures and relationships.</p>

    <h2>Categories</h2>

    <p>View the different categories</p>
    
    <Grid>
      <GridCol v-for="category in categories" :key="category.id">
        <CardCategory 
          :title="category.name" 
          :id="category.id" 
          :image="category.image"
        />
      </GridCol>
    </Grid>

    <br />
    <h2>Blog posts</h2>

    <p>Read the latest blog posts</p>

    <Grid>
      <GridCol v-for="post in posts" :key="post.id">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.image" 
          :author="post.author"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
import categoriesQuery from '~/apollo/queries/category/categories'
import CardCategory from "../components/CardCategory/CardCategory"
import CardPost from "../components/CardPost/CardPost"
import Grid from "~/components/Grid/Grid";
import GridCol from "~/components/Grid/GridCol";

export default {
  name: "home",
  components: {
    'CardCategory': CardCategory,
    'CardPost': CardPost,
    'Grid': Grid,
    'GridCol': GridCol
  },
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
    },
    posts: {
      prefetch: true,
      query: postsQuery
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
