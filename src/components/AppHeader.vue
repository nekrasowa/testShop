<template>
  <header>
    <nav class='navigation'>
      <div class='navigation__category'>
        <p class='navigation__p'><b>Man</b></p>
        <div class='navigation__icon'></div>
      </div>
      <div class='navigation__category'>
        <p class='navigation__p'><b>Woman</b></p>
        <div class='navigation__icon'></div>
      </div>
    </nav>

    <div class='title'>
      <h1>FINOLINO</h1>
    </div>

    <div class='personNav'>
      <div class='personNav__icon' id='search'></div>
      <div class='personNav__icon' id='like'></div>
      <div class='personNav__icon' id='user'></div>
      <div class='personNav__icon' id='basket'></div>
    </div>

  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$font-family: 'Inter', sans-serif;
$font-style: normal;
$color: #FFFFFF;

header {
  width: 100%;
  height: 7%;
  margin-top: 0px;
  display: grid;
  grid-template-columns: 4fr 2fr 4fr;
  grid-template-rows: 100%;
  grid-template-areas: 'navigation title personNav';
  justify-items: center;
  align-items: center;
  background-color: #191919;
  color: $color;
  font-family: $font-family;
  font-style: $font-style;
  text-transform: uppercase;


  %flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-basis: content;
    padding: 0 10px;
  }

  .navigation {
    @extend %flex;
    grid-area: navigation;

    .navigation__category {
      @extend %flex;
      margin: 0;

      .navigation__p {
        font-size: 4%;
      }

      .navigation__icon {
        margin-left: 5px;
        padding: 15px;
        background-image: url('../icons/chevron-down.svg');
      }

    }

  }

  .title {
    grid-area: title;

  }

  .personNav {
    @extend %flex;
    grid-area: personNav;

    .personNav__icon {
      margin-top: 10px;
      padding: 15px;
      background-repeat: no-repeat;
      background-size: 50% 50%;
    }

    #search {
      background-image: url('../icons/search.svg');
    }
    #like {
      background-image: url('../icons/like.svg');
    }
    #user {
      background-image: url('../icons/user.svg');
    }
    #basket {
      background-image: url('../icons/basket.svg');
    }
  }
}
</style>