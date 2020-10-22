<template>
  <main>
    <h1>Dynamic</h1>
  </main>
</template>
<script>
export default {
  name: "directory-info",
  data() {
    return {
      directory: this.$route.params.dir
    };
  }
};
</script>
<style>
</style>