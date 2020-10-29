<template>
  <div class="card">
    <div class="card__image" :style="{'background-image': 'url(http://localhost:1337' + image.url + ')'}" />
    <div class="card__content">
      <div class="card__title">
        {{ title }}
      </div>
      <em>By {{ author }}</em>
    </div>
    <div class="card__footer">
      <nuxt-link :to="link">
        View post
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPost",
  props: ['id', 'title', 'author', 'image'],
  computed: {
    link() {
      return `/post/${this.id}`;
    }
  },
  methods: {
    categoryHref(id) {
      return `/post/${id}`;
    }
  }
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

.card__chip {
  font-size: 0.75rem;
  border: 1px solid gray;
  margin: 0.5rem 0.5rem 0.5rem 0;
  text-decoration: none;
  padding: 2px 5px;
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
  margin-bottom: 0.5rem;
}

.card__footer {
  margin-top: auto;
  border-top: 1px solid lightgray;
  padding: 1rem;
}
</style>
