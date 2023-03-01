<template>
  <div class='productCard'>
    <img :src='product.image' :alt='"image "+product.title' class='productCard__img'>
    <p class='productCard__label'></p>
    <div class='productCard__description'>
      <h2 class='productCard__title'>{{ product.title }}</h2>
      <p class='productCard__price'>{{ product.price }}</p>
      <p class='productCard__seasons'>{{ product.seasons }}</p>
      <div class='productCard__sizes'></div>
    </div>
  </div>
</template>

<script setup>

const product = {
  "id": 8,
  "title": "SODIUM FLUORIDE",
  "image": "https://content1.rozetka.com.ua/goods/images/big_tile/288767385.jpg",
  "price": 4940.53,
  "update_date": "2023-02-04",
  "is_new": true,
  "sizes": ["XS"],
  "seasons": ["winter", "summer"]
}

</script>

<style lang="scss" scoped></style>






Liudmila Nekrasova