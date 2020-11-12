<template>
  <div class="l-container">
    <p>This is the about page</p>
  </div>
</template>

<script>
export default {
  name: "about",
  created() {
    this.$store.commit('page/setTitle', 'About')
  },
}
</script>