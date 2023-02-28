<template>
  <swiper 
    class='sale__gallery'   
    :slides-per-view="1" 
    :space-between="50" 
    @swiper="onSwiper" 
    @slideChange="onSlideChange">
    
    <swiper-slide class='sale__item' v-for='item in items' :style="{ backgroundImage: 'url(' + item.image + ')' }">
      <h2>
        {{ item.title }}
      </h2>
      <p>
        {{ item.description }}
      </p>

    </swiper-slide>

  </swiper>
</template>

<script setup>
import saleImg1 from '/photos/galer-1.jpeg'
import saleImg2 from '/photos/galer-2.jpeg'
import saleImg3 from '/photos/galer-3.jpeg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const items = [
  { title: 'Lorem ipsum dolor sit amet', description: '1000 UAH and under', image: saleImg1, id: 0 },
  { title: '2 Lorem ipsum dolor sit amet', description: '2000 UAH and under', image: saleImg2, id: 1 },
  { title: '3 Lorem ipsum dolor sit amet', description: '3000 UAH and under', image: saleImg3, id: 2 },
]

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

</script>

<style lang="scss" scoped>
.sale__gallery {
  position: absolute;
  padding-left: 7%;
  width: 90%;
  height: 105vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow-x: auto;


  .sale__item {
    margin-left: 2%;
    height: 70%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;


  }
}
</style>
