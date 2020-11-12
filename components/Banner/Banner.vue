<template>
  <div class="banner" :style="{ backgroundImage: `url('${image}')` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    image: {
      type: String,
      required: false,
      default: null
    },
  },
  computed: {
    computedClasses() {
      return [
        'banner',
        !this.image ? 'banner--no-image' : null
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/flyweight/src/scss/variables.scss";

.banner {
  position: relative;
  padding-bottom: 25%;
  overflow: hidden;
  box-shadow: $shadow;
  background-size: cover;
  background-position: center;
}

.banner--no-image {
  padding-bottom: 0;
}
</style>