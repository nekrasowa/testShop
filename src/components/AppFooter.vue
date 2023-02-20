<template>
  <footer>
    <div class='leftSide'>
      <div class='logo'>
        Finolino
      </div>
      <div class='mediaIcons'>
        <div class='sotial__icon' id='insta'></div>
        <div class='sotial__icon' id='faceb'></div>
        <div class='sotial__icon' id='pin'></div>
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
$font-family: 'Inter', sans-serif;
$font-style: normal;
$color: #FFFFFF;

footer {
  position: absolute;
  width: 100%;
  height: 35%;
  left: 0px;
  top: 100%;
  background: #191919;
  color: $color;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100%;
  grid-template-areas: 'leftSide rigthSide';
  justify-items: center;
  align-items: center;
  font-family: $font-family;
  font-style: $font-style;

  .leftSide {
    grid-area: leftSide;
    margin-left: 30%;
    .logo {
      font-size: 200%;
      margin-bottom: 20%;
    }
    
    .crs {
      color: #858585;
      font-size: 80%;
      margin: 0;
    }

    .mediaIcons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: start;
      align-items: center;
      flex-basis: content;
      padding: 0 10px;

      .sotial__icon {
        margin-top: 10px;
        padding: 15px;
        background-repeat: no-repeat;
        background-size: 50% 50%;
      }
      #insta {
          background-image: url('../icons/instagram.svg');

        }

        #faceb {
          background-image: url('../icons/facebook.svg');

        }

        #pin {
          background-image: url('../icons/pinterest.svg');

        }
    }

  }

  .rigthSide {
    grid-area: rigthSide;
    display: grid;
    grid-auto-flow: column;
    gap: 1em;

  }

}
</style>