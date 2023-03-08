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
        Popular items
      </h1>
      <Suspense>
        <AppMainHomePopular />
      </Suspense>

    </div>

    <div id='subscribe'>
      <h1 class='mainInfo'>
        Subscribe to newsletter
      </h1>
      <h4 class='subscribe__description'>Sign up for email updates on the our latest offers and news</h4>
      <input name='email' class='subscribe__emailInput' placeholder='Enter Your Email' />
      
      <p class='subscribe__acception'>
        <label class='subscribe__checkbox'>
          <input 
            type='checkbox' 
            name='acception'
          >
          <span class='subscribe__acceptionText'>
            I accept the terms of <a href='#'>Privacy Policy</a>
          </span>
        </label>    
      </p>
      <button class='subscribe__btn'>Subscribe</button>
    </div>
  </div>
</template>

<script setup>
import AppMainHomeSale from './AppMainHomeSale.vue';
import AppMainHomePopular from './AppMainHomePopular.vue';

</script>

<style lang='scss' scoped>
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
      text-align: start;

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
    
      &:hover {
        background-color: #ffffff66;
      }
      &:active {
        background-color: #ffffff66;
        border: 3px solid rgb(99 60 54);
        color: rgb(99 60 54);
      }
      &:focus {
        background-color: #ffffff66;
        border: 3px solid rgb(99 60 54);
        color: rgb(99 60 54);
      }
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
  height: auto;

  &.translucent {
    background-position: 50% 28%;
    background-size: 120%;
    background-color: #191919;
  }

  h1 {
    margin-top: 5%;
    font-size: 3em;
  }

  #sale {
    width: $width;
    height: $height;
  }

  #popular {
    display: block;
    width: $width;
    height: 60vh;
  }

  #subscribe {
    margin-top: 5%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .mainInfo {
      margin: 0;
    }

    .subscribe__description {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: bold;
      color: #FFFFFF;
      font-size: 1em;
      text-align: center;
      margin: 0 0 3% 0;
    }

    .subscribe__emailInput {
      background: none;
      border: none;
      border-bottom: 2px solid #FFFFFF;
      font-size: 1.5em;
      color: #FFFFFF;
      text-align: center;


      &:focus-visible {
        outline: none;
      }
    }

    .subscribe__acception {
      width: 100%;
      text-align: center;
      
      .subscribe__checkbox {
        

        input {
          position: absolute;
          z-index: -1;
          opacity: 0;

          &:not(:disabled):not(:checked)+span:hover::before {
            border-color: #ffd9b3;
          }
          &:not(:disabled):active+span::before {
            background-color: #ffdeb3;
            border-color: #ffe1b3;
          }
          &:focus+span::before {
            box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.25);
          }
          &:focus:not(:checked)+span::before {
            border-color: #ffb980;
          }
          &:checked+span::before {
            border-color: #ef940b;
            background-color: #ef720b;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
          }
          &:disabled+span::before {
            background-color: #efebe9;
          }
        }

        .subscribe__acceptionText {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 100;
          color: #FFFFFF;
          user-select: none;
          a {
            color: #FFFFFF;
          }
          
          &::before {
            content: '';
            display: inline-block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #adb5bd;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
          }
        }
      }
      
    }
    .subscribe__btn {
      padding: 2% 7% 2% 6%;
      margin-bottom: 10%;
      border: none;
      border-radius: 0 0 55px 0;
      background-color: #E9A14D;
      color: white;
      font-size: 1em;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
   
      &:hover {
        background-color: #e69f4966;
      }
      &:active {
        background-color: #ffffff66;
      }
      &:focus {
        background-color: #a04800;
      } 
    }
  }
}
</style>