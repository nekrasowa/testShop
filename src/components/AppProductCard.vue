<template>
  <div class='productCard'>
    <picture class='productCard__imgWraper'>
      <img :src='product.image || noImage' :alt='"image " + product.title' class='productCard__img'>
      <p class='productCard__label' v-if='product.is_new'>New</p>
    </picture>
    <div class='productCard__description'>
      <p class='productCard__title'>{{ product.title }}</p>
      <p class='productCard__price'>{{ product.price + ' UAN' }}</p>
      <span class='productCard__seasonsHeader'>Season: </span>
      <span class='productCard__seasons' v-for='season in product.seasons'>
        {{ season + ' ' }}
      </span>
      <div class='productCard__sizes'>
        <span class='productCard__sizeItem' v-for='size in product.sizes'>{{ size }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import noImage from '/photos/no-image.jpeg'

const product = {
  "id": 1,
  "title": "Octinoxate and Titanium Dioxide",
  "image": "https://content1.rozetka.com.ua/goods/images/big_tile/238608720.jpg",
  "price": 9399.47,
  "update_date": "2022-06-22",
  "is_new": true,
  "sizes": ["XS", "S", "M"],
  "seasons": ["winter", "winter"]
}
</script>

<style lang="scss" scoped>
$font-family: 'Inter', sans-serif;
$font-style: normal;

.productCard {
  display: flex;
  flex-direction: column;
  height: 20em;
  width: 12em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .productCard__imgWraper {
    padding: 0;
    border-top-left-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .productCard__img {
    width: -webkit-fill-available;
    object-fit: cover;
  }

  .productCard__label {
    display: inline-block;
    position: absolute;
    margin: 0;
    top: 0px;
    left: 0px;
    background-color: #E9A14D;
    padding: 0.4em;
  }

  .productCard__description {
    background-color: rgb(255, 255, 255);
    // height: 6em;
    font-family: $font-family;
    font-style: $font-style;
    font-size: 0.8em;
    padding-left: 5%;

    .productCard__title,
    .productCard__price,
    .productCard__seasons,
    .productCard__seasons,
    .productCard__sizes {
      margin: 2% 0 2% 0;

    }

    .productCard__price {}

    .productCard__seasonsHeader {
      color: #858585;
    }

    .productCard__seasons {
      margin-top: 10%;
    }

    .productCard__sizes {
      display: flex;
      flex-flow: row nowrap;
      // align-items: center;
      // align-content: center;

      .productCard__sizeItem {
        border: 1px solid black;
        width: 10%;
        margin-left: 2%;
        text-align: center
      }
    }
  }

}</style>
