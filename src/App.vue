<template>
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

</style>
