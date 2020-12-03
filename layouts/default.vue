<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header/Header';
  import Footer from '../components/Footer/Footer';

  export default {
    components: {
      'Header': Header,
      'Footer': Footer
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