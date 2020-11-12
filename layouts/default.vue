<template>
  <div>
    <Header>
    </Header>
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
    }
  }
</script>

<style>
.main {
  margin-top: 10rem;
  margin-bottom: 20rem;
}
</style>