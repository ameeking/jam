<template>
  <div class="card">
    <div class="card__image-wrapper">
      <img :src="image" class="card__image"/>
    </div>

    <div class="card__title">
      {{ name }}
    </div>

    <nuxt-link :to="link">
      Explore
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['id', 'name', 'image'],
  computed: {
    link() {
      return `/product/${this.id}`;
    }
  }
};
</script>

<style lang="scss">
.card__image {
  height: 200px;
  overflow: hidden;
}

.card__image {
  width: 100%;
}
</style>
