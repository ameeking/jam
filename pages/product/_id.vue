<template>
  <div class="l-container">
    <div>
      <img :src="imagePath" />
    </div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    }
  },
  computed: {
    imagePath() {
      if (!this.product.field_image) {
        return;
      }

      return `http://drupal-9-headless.lndo.site${this.product.field_image.uri.url}`;
    }
  },
  async asyncData({ $repository, store, route }) {
    let product = await $repository.product.getProduct(route.params.id);

    store.commit('page/setTitle', product.title);
    store.commit('page/setBanner', '');

    return {
      product: product.data
    };
  },
}
</script>
