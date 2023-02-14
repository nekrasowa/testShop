<template>
  <footer>
    <div class='leftSide'>
      <div class='logo'>
        Finilino
      </div>
      <div class='mediaIcon'>
      </div>
      <p class='crs'>
        © 2020. All rights reserved
      </p>
    </div>
    <div class='rigthSide'>
      <AppFooterNavigation :parts="parts" />
    </div>
  </footer>
</template>

<script>
import AppFooterNavigation from './AppFooterNavigation.vue'

export default {
  components: {
    AppFooterNavigation
  },
  data() {
    return {
      parts: [
        { header: 'About', part1: 'Finolino, Inc.', part2: 'Policies', part3: 'FAQs' },
        { header: 'Help', part1: 'Delivery', part2: 'Payment', part3: 'Return' },
        { header: 'Contacts', part1: '+11 (011) 111 11 11', part2: '+22 (022) 222 22 22', part3: 'finolino@finolino.com' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$font-family: 'Poppins';
$font-style: normal;
$color: #FFFFFF;

footer {
  position: absolute;
  width: 100%;
  height: 15%;
  left: 0px;
  top: 100%;
  background: #191919;
  color: $color;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100%;
  grid-template-areas: 'leftSide rigthSide';
  justify-items: center;
  align-items: center;
  font-family: $font-family;
  font-style: $font-style;
}
.leftSide {
  grid-area: leftSide;

}

.rigthSide {
  grid-area: rigthSide;
}
</style>