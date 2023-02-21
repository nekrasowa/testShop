<template>
  <div class='translucent' id='welcome'>
    <div id='welcome__textblock'>
      <h1 class='mainInfo'>
        New collection
      </h1>
      <button type='button' id='welcome__btnCatalog'>
        GO TO CATALOG
      </button>
    </div>
  </div>

  <div id='nav'>
    <div class='nav__photo' id='nav__photo_man'>
      <h1 class='mainInfo'>
      </h1>
    </div>
    <div class='nav__photo' id='nav__photo_woman'>
      <h1 class='mainInfo'>
      </h1>
    </div>
  </div>

  <div class='translucent' id='sale'>
    <h1 class='mainInfo'>
    </h1>
    <div class='sale__gallery'>

    </div>
  </div>

  <div class='translucent' id='popular'>
    <h1 class='mainInfo'>
    </h1>
    <div class='popular__items'>

    </div>
  </div>

  <div class='translucent' id='subscribe'>
    <h1 class='mainInfo'>
    </h1>
    <p></p>
    <input />
    <button type='checkbox'>

    </button>
    <p></p>
    <button></button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.translucent {
  z-index: 0;
  position: relative;

  .mainInfo {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 2em;

  }
}

#welcome {
  display: block;
  position: relative;
  margin: 0;
  background: linear-gradient(0deg, rgba(105, 48, 29, 0.19), rgba(105, 48, 29, 0.19)), url('../icons/photos/bl-girl.jpeg');
  background-color: #d5985f;
  background-repeat: no-repeat;
  background-position: 20rem 0%;
  background-size: 80%;
  width: 100%;
  height: 100vh;

  #welcome__textblock {
    z-index: 4;

    position: absolute;
    top: 40%;
    left: 30%;
    width: 20%;

    .mainInfo {
      text-transform: none;
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
  display: grid;
  z-index: 3;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: 'man women';
  justify-items: center;
  align-items: center;

  .nav__photo {

  }  
  #nav__photo_man {
    
  }

}

#sale {}

#popular {}

#subscribe {}
</style>