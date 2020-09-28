<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="titleWrapper">
          <h1 class="title">{{ $route.query.title }} {{ asset.text }}</h1>
        </div>
        <p class="total">{{ $route.query.total_items }} {{ asset.text }}</p>
      </div>
      <div
        class="heroImg"
        :style="{
          backgroundImage: `url(${urls[0]})`
        }"
      />
    </div>
    <div class="imgGrid">
      <div
        class="wrapper"
        :style="{
          backgroundImage: `url(${urls[1]})`
        }"
      />
      <div
        class="wrapper"
        :style="{
          backgroundImage: `url(${urls[2]})`
        }"
      />
      <div
        class="wrapper"
        :style="{
          backgroundImage: `url(${urls[3]})`
        }"
      />
      <div
        class="wrapper"
        :style="{
          backgroundImage: `url(${urls[4]})`
        }"
      />
      <div
        class="wrapper"
        :style="{
          backgroundImage: `url(${urls[5]})`
        }"
      />
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
}

.content {
  padding: 50px 0 0 50px;
  width: 246px;
  z-index: 10;
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

.heroImg {
  width: 430px;
  height: 322px;
  position: absolute;
  right: 0;
  top: -20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
}

.imgGrid {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  position: absolute;
  left: -65px;
  bottom: 40px;
}

.wrapper {
  width: 140px;
  height: 105px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  margin: 0 15px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
}
</style>
