<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="titleWrapper">
          <h1 class="title">{{ $route.query.title }} {{ asset.text }}</h1>
        </div>
        <p class="total">{{ $route.query.total_items }} {{ asset.text }}</p>
      </div>
      <div class="imgGrid">
        <div
          class="image"
          :style="{
            backgroundImage: `url(${urls[0]})`
          }"
        />
        <div
          class="image"
          :style="{
            backgroundImage: `url(${urls[1]})`
          }"
        />
        <div
          class="image"
          :style="{
            backgroundImage: `url(${urls[2]})`
          }"
        />
        <div
          class="image"
          :style="{
            backgroundImage: `url(${urls[3]})`
          }"
        />
        <div
          class="image"
          :style="{
            backgroundImage: `url(${urls[4]})`
          }"
        />
        <div
          class="image"
          :style="{
            backgroundImage: `url(${urls[5]})`
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '@/components/mixins/common'

export default {
  mixins: [CommonMixin],

  data() {
    return {
      maxMockups: 6
    }
  },

  head: () => ({
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  })
}
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  font-family: 'Nanum Gothic';
}

.container {
  width: 720px;
  height: 480px;
  overflow: hidden;
  position: relative;
}

.main {
  display: flex;
  height: 100%;
}

.content {
  padding: 50px 50px 0;
  width: 300px;
  z-index: 10;
  background: #f0f0f0;
}

.title {
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
}

.total {
  padding: 16px 0 40px 0;
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  font-family: 'Roboto';
}

.imgGrid {
  display: grid;
  grid-template-columns: 140px 140px;
  grid-template-rows: 140px 140px 140px;
  grid-gap: 15px;
  margin: auto;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  border-radius: 20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
}
</style>
