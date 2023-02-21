<template>
  <div class='mainPart'>
  </div>
    <AppHeader />
    <AppMainHome />
    <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMainHome from './components/AppMainHome.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    AppHeader,
    AppMainHome,
    AppFooter
  },
}
</script>

<style lang="scss">
.mainPart {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-image: url('./icons/photos/bg_letters.png');
  background-size: 100%;
  background-color: black;
  opacity: 0.6;
  width: 100%;
  height: 100%;
}
</style>
