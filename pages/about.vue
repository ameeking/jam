<template>
  <div class="l-container">
    <p>This is the about page</p>
  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {
    this.$store.commit('page/setTitle', 'About');
    this.$store.commit('page/setBanner', '');
  },
}
</script>
