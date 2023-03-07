<template>
  <div class='productCard'>
    <picture class='productCard__imgWraper'>
      <img 
        :src='product.image || noImage' 
        :alt='"image " + product.title' 
        class='productCard__img'
      >
      <p class='productCard__label' v-if='product.is_new'>New</p>
    </picture>
    <div class='productCard__description'>
      <p class='productCard__title'>{{ shownTitle(product.title) }}</p>
      <p class='productCard__price'>{{ product.price + ' UAN' }}</p>
      <span class='productCard__seasonsHeader'>
        Season: 
      </span>
      <span class='productCard__seasons'>
        {{ shownSeasons(product.seasons) }}
      </span>
      <div class='productCard__sizes'>
        <span class='productCard__sizeItem' v-for='size in product.sizes'>{{ size }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import noImage from '/photos/no-image.jpeg'

const product = defineProps({
  id: Number,
  title: {
    type: String,
  },
  image: {
    type: String,
    default: noImage
  },
  price: Number,
  update_date: String,
  is_new: Boolean,
  sizes: Array,
  seasons: Array
})

const shownTitle = (title) => {
  let shownShortTitle = title

  if (title.length > 23) {
    const shortTitle = title.slice(0, 24)
    shownShortTitle = `${shortTitle}...`
    return shownShortTitle
  }
  return shownShortTitle
}

const shownSeasons = (seasons) => seasons.join(', ')

</script>

<style lang="scss" scoped>
$font-family: 'Inter', sans-serif;
$font-style: normal;

.productCard {
  margin: 0px 0.5em 0 0.5em;
  display: flex;
  flex-direction: column;
  height: 20em;
  width: 12em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .productCard__imgWraper {
    position: relative;
    padding: 0;
    max-height: 12em;
    border-top-left-radius: 10px;
    overflow: hidden;
    background-color: #ffffff;
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
    font-family: $font-family;
    font-style: $font-style;
    font-size: 0.8em;
    padding: 5%;
    height: 4em;
    overflow: hidden;

    &:hover {
      height: fit-content;
    }

    .productCard__title,
    .productCard__price,
    .productCard__sizes {
      margin-top: 2%;
    }

    .productCard__price {
      margin-bottom: 15%;

    }

    .productCard__seasonsHeader {
      color: #858585;
    }

    .productCard__seasons {
      margin-top: 10%;
    }

    .productCard__sizes {
      display: flex;
      flex-flow: row nowrap;

      .productCard__sizeItem {
        border: 1px solid black;
        width: 15%;
        margin-left: 2%;
        text-align: center
      }
    }
  }

}
</style>
