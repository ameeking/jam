<template>
  <header>
    <div class="l-container">
      <Navigation class="u-mt--3 u-mb--4">
        <Logo inverse="true"/>
      </Navigation>
    </div>
    <h1 class="l-container">{{ title }}</h1>
  </header>
</template>

<script>
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo'

export default {
  name: "Header",
  components: {
    'Banner': Banner,
    'Navigation': Navigation,
    'Logo': Logo
  },
  props: {
    image: {
      type: String,
      required: false,
      default: null
    },
  },
  computed: {
    title() {
      return this.$store.getters['page/getTitle']
    }
  }
}
</script>

<style lang="scss">
.header__title {
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 7rem;
}
</style>