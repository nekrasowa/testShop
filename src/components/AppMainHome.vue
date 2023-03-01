<template>
  <div id='welcome'>
    <div class='translucent'>
      <div id='welcome__textblock'>
        <h1 class='mainInfo'>
          New collection
        </h1>
        <button type='button' id='welcome__btnCatalog'>
          GO TO CATALOG
        </button>
      </div>
    </div>
  </div>

  <div id='nav'>
    <div class='nav__photo' id='nav__photo_man'>
      <h1 class='mainInfo'>
        <a href=''>Man</a>
      </h1>
    </div>
    <div class='nav__photo' id='nav__photo_woman'>
      <h1 class='mainInfo'>
        <a href=''>Woman</a>
      </h1>
    </div>
  </div>

  <div id='addInfo' class='translucent'>
    <div id='sale'>
      <h1 class='mainInfo'>
        The Gifting Sale
      </h1>
      <AppMainHomeSale />

    </div>

    <div id='popular'>
      <h1 class='mainInfo'>
      </h1>
      <AppProductCard />
    </div>

    <div id='subscribe'>
      <h1 class='mainInfo'>
      </h1>
      <p></p>
      <input />
      <button type='checkbox'>

      </button>
      <p></p>
      <button></button>
    </div>
  </div>
</template>

<script setup>
import AppMainHomeSale from './AppMainHomeSale.vue';
import AppProductCard from './AppProductCard.vue';

</script>

<style lang="scss" scoped>
$width: 100%;
$height: 100vh;


.translucent {
  background-image: url('../icons/photos/bg_letters-transp.png');
  background-size: 100%;
  background-position: 0% 130%;
  width: $width;
  height: $height;
}

.mainInfo {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  color: #FFFFFF;
  font-size: 2em;
  text-align: center;
}

#welcome {
  display: block;
  position: relative;
  margin: 0;
  background: linear-gradient(0deg, rgba(105, 48, 29, 0.19), rgba(105, 48, 29, 0.19));
  background-image: url('../icons/photos/bl-girl.png');
  background-color: #d5985f;
  background-repeat: no-repeat;
  background-size: cover;
  width: $width;
  height: $height;

  #welcome__textblock {
    position: absolute;
    top: 37%;
    left: 30%;
    width: 20%;


    .mainInfo {
      text-transform: none;
      font-weight: 800;

    }

    #welcome__btnCatalog {
      background-color: #ffffff00;
      border: 3px solid white;
      border-radius: 0 32px 0 0;
      color: white;
      padding: 5% 15%;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }

    #welcome__btnCatalog:hover {
      background-color: #ffffff66;

    }

    #welcome__btnCatalog:active {
      background-color: #ffffff66;
      border: 3px solid rgb(99 60 54);
      color: rgb(99 60 54);

    }

    #welcome__btnCatalog:focus {
      background-color: #ffffff66;
      border: 3px solid rgb(99 60 54);
      color: rgb(99 60 54);

    }
  }
}

#nav {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'man woman';

  .nav__photo {
    width: $width;
    height: $height;
    background-repeat: no-repeat;
    background-size: cover;

    .mainInfo {
      position: absolute;
      bottom: 0;
      margin: 0 auto 0;
      padding: 2% 0%;
      width: 50%;
      background-color: rgba(25, 25, 25, 0.5);
      text-align: center;
      font-size: 2.5em;

      a {
        text-decoration: none;
        color: #FFFFFF;

      }
    }
  }

  #nav__photo_man {
    grid-area: man;
    background-image: url('../icons/photos/bl-men.jpeg');
  }

  #nav__photo_woman {
    grid-area: woman;
    background-image: url('../icons/photos/w-girl.jpeg');
  }

}

#addInfo {
  position: relative;
  display: flex;
  flex-direction: column;

  &.translucent {
    background-position: 50% 28%;
    background-size: 120%;
    background-color: #191919;
  }

  #sale {
    width: $width;
    height: $height;

    h1 {
      margin-top: 3%;
      font-size: 3em;
    }
  }
}

#sale {}

#popular {}

#subscribe {}
</style>