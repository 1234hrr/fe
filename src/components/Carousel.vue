<template>
    <div class="carousel">
      <div v-for="(image, index) in images" :key="index" class="slide" v-show="currentIndex === index">
        <img :src="image.url" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0,
        intervalId: null
      };
    },
    methods: {
      next() {
        console.log(this.currentIndex);
        console.log( this.images.length);
        this.currentIndex++;
        if (this.currentIndex >= this.images.length) {
          this.currentIndex = 0;
        }
      },
      startAutoPlay() {
        this.intervalId = setInterval(this.next, 2000);
      },
      stopAutoPlay() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }
    },
    mounted() {
      this.startAutoPlay();
    },
    beforeDestroy() {
      this.stopAutoPlay();
    }
  }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 500x;
    height: 300px;
  }
  .carousel .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
  }
  .carousel .slide[style*="display: block"] {
    display: block !important;
  }
  </style>
  