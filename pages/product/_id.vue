<template>
  <div>
    <h1>{{ product.name }}</h1>
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
  }
}
</script>
