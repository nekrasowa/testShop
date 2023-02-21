<template>
  <div class='mainBack'></div>
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
.mainBack {
  position: absolute;
  left: 0;
  top: -285%;
  z-index: 2;
  background-image: url('./icons/photos/bg_letters.png');
  background-size: 100%;
  background-color: rgba(240, 248, 255, 0);
  opacity: 10%;
  width: 100vw;
  height: 500vmax;
}
</style>
