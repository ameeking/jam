<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
  import Header from '../components/Header/Header';
  import Logo from '../components/Logo/Logo';

  export default {
    components: {
      'Header': Header,
      'Logo': Logo
    },
    computed: {
      title() {
        return this.$store.getters['page/getTitle']
      },
      banner() {
        return this.$store.getters['page/getBanner']
      }
    }
  }
</script>

<style>
.main {
  margin-top: 7rem;
  margin-bottom: 20rem;
}
</style>