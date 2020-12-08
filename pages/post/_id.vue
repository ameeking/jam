<template>
  <div class="l-container">
    <em>By {{post.uid.display_name }}</em>
    <div>
      <img :src="imagePath" />
    </div>
    <p>{{ post.body.value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    }
  },
  computed: {
    imagePath() {
      if (!this.post.field_image) {
        return;
      }

      return `https://drupal-9-headless.lndo.site${this.post.field_image.uri.url}`;
    }
  },
  async asyncData({ $repository, store, route }) {
    let post = await $repository.post.getPost(route.params.id);

    store.commit('page/setTitle', post.title);
    store.commit('page/setBanner', '');

    return {
      post: post
    };
  },
}
</script>
