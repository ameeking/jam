<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nav v-for="directory in directories" :key="directory.id">
        <nuxt-link :to="directory.path">
            {{ directory.name }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      directories: [
        {
          id: 0,
          path: '/moo',
          name: "The Assets Directory"
        },
        {
          id: 1,
          path: '/boo',
          name: "The Components Directory"
        }
      ]
    };
  }
};
</script>

<style>
</style>