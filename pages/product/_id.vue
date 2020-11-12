<template>
  <div class="l-container">
    <div>
      <img :src="imagePath" />
    </div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import productQuery from '~/apollo/queries/product/product'

export default {
  data() {
    return {
      product: Object
    }
  },
  computed: {
    imagePath() {
      if (!this.product.image) {
        return;
      }

      return `http://localhost:1337${this.product.image.url}`;
    }
  },
  apollo: {
    product: {
      prefetch: true,
      query: productQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  created() {
    this.$store.commit('page/setTitle', this.product.name)
  },
}
</script>
