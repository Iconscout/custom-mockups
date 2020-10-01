<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="titleWrapper">
          <h1 class="title">{{ $route.query.title }} {{ asset.text }}</h1>
        </div>
        <p class="total">{{ $route.query.total_items }} {{ asset.text }}</p>
      </div>
      <div class="pattern">
        <img src="@/assets/images/box-pattern.png" />
      </div>
      <div class="pattern2">
        <img src="@/assets/images/boxes.png" />
      </div>
      <div class="firstColumn">
        <div
          class="wrapper"
          :style="{
            backgroundImage: `url(${urls[0]})`
          }"
        />
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
      </div>
      <div class="secondColumn">
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
      <div class="thirdColumn">
        <div
          class="wrapper"
          :style="{
            backgroundImage: `url(${urls[6]})`
          }"
        />
        <div
          class="wrapper"
          :style="{
            backgroundImage: `url(${urls[7]})`
          }"
        />
        <div
          class="wrapper"
          :style="{
            backgroundImage: `url(${urls[8]})`
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
      maxMockups: 9
    }
  },

  head: () => ({
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@700&display=swap'
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
  font-family: 'Noto Sans SC';
}
.container {
  width: 720px;
  height: 480px;
  overflow: hidden;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 60px 0 0 60px;
  width: 324px;
}

.pattern {
  position: absolute;
  top: 247px;
  right: 479px;
}

.pattern2 {
  position: absolute;
  top: 18px;
  right: 286px;
}

.titleWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-weight: 500;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
}

.total {
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  font-family: 'Roboto';
  margin-top: 15px;
}

.firstColumn {
  margin-right: 23px;
  margin-top: 228px;
  z-index: 10;
}

.secondColumn {
  margin-right: 23px;
  margin-top: -26px;
}

.thirdColumn {
  margin-top: 60px;
  margin-right: -42px;
}

.last {
  position: absolute;
  bottom: 10px;
  left: 40px;
}

.wrapper {
  width: 160px;
  height: 170px;
  margin: 20px 0;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
}
</style>
