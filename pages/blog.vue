<template>
  <div class="l-container">
    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <Grid>
      <GridCol v-for="post in filteredList" :key="post.id" xs="8">
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
import postsQuery from "~/apollo/queries/post/posts";
import CardPost from "~/components/CardPost/CardPost";
import { Grid, GridCol } from "~/node_modules/flyweight"

export default {
  name: "posts",
  components: {
    'CardPost': CardPost,
    'Grid': Grid,
    'GridCol': GridCol
  },
  data() {
    return {
      posts: [],
      query: ''
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery
    }
  },
  computed: {
    filteredList() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
  mounted() {
    this.$store.commit('page/setTitle', 'Blog');
    this.$store.commit('page/setBanner', '');
  },
}
</script>
