<template>
  <div>
    <h1>Blog</h1>

    <form>
      <input v-model="query" type="search" placeholder="Search...">
    </form>

    <br />

    <div class="grid">
      <div class="grid__col" v-for="post in filteredList" :key="post.id">
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
import postsQuery from '~/apollo/queries/post/posts'
import CardPost from "../components/CardPost/CardPost"

export default {
  name: "posts",
  components: {
    'CardPost': CardPost
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
  }
}
</script>
