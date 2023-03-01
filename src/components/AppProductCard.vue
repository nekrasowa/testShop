<template>
  <div class='productCard'>
    <img :src='product.image || noImage' :alt='"image " + product.title' class='productCard__img'>
    <p class='productCard__label' v-if='product.is_new'>New</p>
    <div class='productCard__description'>
      <h2 class='productCard__title'>{{ product.title }}</h2>
      <p class='productCard__price'>{{ product.price + ' UAN' }}</p>
      <p class='productCard__seasons'>{{ product.seasons }}</p>
      <div class='productCard__sizes'></div>
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
  "sizes": ["XS"],
  "seasons": ["winter"]
}
</script>

<style lang="scss" scoped>
.productCard {
  display: flex;
  flex-direction: column;
  height: 2em;
  .productCard__img {}
  .productCard__label {
    position: absolute;
    top: 0;
    left: 0;
  }

  .productCard__description {
    background-color: rgb(255, 255, 255);

    .productCard__title {}

    .productCard__price {}

    .productCard__seasons {}

    .productCard__sizes {}
  }

}
</style>
