<template>
  <ul class='popular__set'>
    <li v-for='product in popularProduct' :key='product.id'>
      <AppProductCard :id=product.id :title=product.title :image=product.image :price=product.price
        :update_date=product.update_date :is_new=product.is_new :sizes=product.sizes :seasons=product.seasons />
    </li>
  </ul>
</template>

<script setup>
import AppProductCard from './AppProductCard.vue';
import jsonProducts from '../assets/finolino_dresses.json'

const getPopulars = (array) => array.slice(0, 4)

const popularProduct = getPopulars(jsonProducts)

console.log('[popularProduct]:', popularProduct, typeof popularProduct)
console.log('[popularProduct]:', popularProduct[1])

</script>

<style lang="scss" scoped>
$font-family: 'Inter', sans-serif;
$font-style: normal;
$color: #FFFFFF;

.popular__set {
  position: relative;
  display: flex;

}
</style>
