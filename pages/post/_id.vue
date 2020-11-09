<template>
  <div class="l-container">
    <h1>{{ post.name }}</h1>
    <em>By {{post.author }}</em>
    <div>
      <img :src="imagePath" />
    </div>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/post/post'

export default {
  data() {
    return {
      post: Object
    }
  },
  computed: {
    imagePath() {
      if (!this.post.image) {
        return;
      }

      return `http://localhost:1337${this.post.image.url}`;
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: postQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
