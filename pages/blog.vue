<template>
  <div class="l-container">
    <Grid class="u-mt--4">
      <GridCol v-for="post in posts" :key="post.id" xs="7">
        <CardPost :post="post" />
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
  mounted() {
    this.$store.commit('page/setTitle', 'Blog');
    this.$store.commit('page/setBanner', '');
  },
  async asyncData({ $repository }) {
    let posts = await $repository.post.getAllPosts(12);

    return {
      posts: posts.data
    };
  },
}
</script>
