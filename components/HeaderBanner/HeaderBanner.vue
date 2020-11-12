<template>
  <header>
    <Banner image="https://lp-cms-production.imgix.net/2019-06/GettyImages-540039747_full.jpg?fit=crop&w=1680&h=620&auto=format&blendMode=multiply&blend=%23ccc&ixlib=react-8.6.4&w=1680&h=620&dpr=2">
      <div class="l-container">
        <Navigation inverse="true" class="u-mt--3 u-mb--4">
          <Logo />
        </Navigation>
        <h1 class="header__title">{{ title }}</h1>
      </div>
    </Banner>
  </header>
</template>

<script>
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo'

export default {
  name: "HeaderBanner",
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