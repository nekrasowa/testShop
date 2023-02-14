<template>
  <AppHeader />
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMainHome from './components/AppMain.vue';
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
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

</style>
