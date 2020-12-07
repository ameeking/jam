<template>
  <div class="l-container">
    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <Grid class="u-mt--4">
      <GridCol v-for="post in posts" :key="post.id" xs="7">
        <CardPost 
          :title="post.title" 
          :id="post.id" 
          :image="post.field_image"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
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
  async asyncData({ $repository }) {
    let posts = await $repository.post.getAllPosts(12);

    return {
      posts: posts
    };
  },
}
</script>
