<template>
  <div class="card">
    <div class="card__image" :style="{'background-image': 'url(' + image + ')'}" />
    <div class="card__content">
      <div class="card__title">
        {{ name }}
      </div>
      <p>This is a short description for the card component.</p>
    </div>
    <div class="card__footer">
      <nuxt-link :to="link">
        Explore
      </nuxt-link>
    </div>
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
.card {
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

.card__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100%;
}

.card__content {
  padding: 1rem;
}

.card__title {
  font-size: 1.25rem;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}

.card__footer {
  border-top: 1px solid lightgray;
  padding: 1rem;
}
</style>
