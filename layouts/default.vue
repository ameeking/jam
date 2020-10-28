<template>
  <div>
    <header class="header">
      <Navigation>
        <Logo />
      </Navigation>
    </header>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation/Navigation';
  import Logo from '../components/Logo/Logo';

  export default {
    components: {
      'Navigation': Navigation,
      'Logo': Logo
    }
  }
</script>

<style lang="scss">
.header {
  padding: 1rem;
  border-bottom: 1px solid lightgray;
}

.main {
  padding: 1rem;
}
</style>