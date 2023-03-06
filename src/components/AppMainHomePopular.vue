<template>
  <ul class='popular__set'>
    <li 
      v-for='(product, index) in products'
      :key='index'
    >
      <AppProductCard 
        :id=product.id
        :title=product.title
        :image=product.image
        :price=product.price
        :update_date=product.update_date
        :is_new=product.is_new
        :sizes=product.sizes
        :seasons=product.seasons
      />
    </li>
  </ul>
</template>

<script setup>
import AppProductCard from './AppProductCard.vue';

const products = [
{
    "id": 1,
    "title": "Octinoxate and Titanium Dioxide",
    "image": "https://content1.rozetka.com.ua/goods/images/big_tile/238608720.jpg",
    "price": 9399.47,
    "update_date": "2022-06-22",
    "is_new": false,
    "sizes": ["XS"],
    "seasons": ["winter"]
  },
  {
    "id": 2,
    "title": "Anthracinum, Pyrogenium, Aconitum nap., Aloe, Apis mel., Arnica, Arsenicum alb., Baptisia, Belladonna, Bryonia, Cantharis, Chelidonium majus, Crotalus horridus, Ferrum phosphoricum, Gaultheria procumbens, Hepar sulph. calc., Iodium, Lachesis, Nux vom., Phosphorus, Pulsatilla, Rhus toxicodendron, Veratrum viride, Verbascum, Echinacea",
    "image": "https://content.rozetka.com.ua/goods/images/big_tile/293905549.jpg",
    "price": 4440.84,
    "update_date": "2023-02-19",
    "is_new": true,
    "sizes": ["XXL"],
    "seasons": ["winter"]
  },
  {
    "id": 3,
    "title": "rivaroxaban",
    "image": "https://content1.rozetka.com.ua/goods/images/big_tile/298330206.jpg",
    "price": 8353.31,
    "update_date": "2022-12-19",
    "is_new": false,
    "sizes": ["XL", "XXL"],
    "seasons": ["winter", "summer"]
  },
  {
    "id": 4,
    "title": "Hydroquinone",
    "image": null,
    "price": 7782.92,
    "update_date": "2022-09-10",
    "is_new": false,
    "sizes": ["M", "L", "XS", "XXL"],
    "seasons": ["summer", "winter"]
  }
]

// const products = await fetch('./finolino_dresses.json')
// const productsJSON = await products.json()

// const getPopular = (array) => array.slice(0, 4)

// const popularProduct = getPopular(productsJSON)
// console.log('[popularProduct]:', popularProduct)
  
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
