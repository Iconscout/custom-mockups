<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="titleWrapper">
          <h1 class="title">{{ $route.query.title }} {{ asset.text }}</h1>
        </div>
        <p class="total">{{ $route.query.total_items }} {{ asset.text }}</p>
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
  background-image: url('~assets/images/pattern-background.png');
  background-size: 1000px;
  background-position: -140px -70px;
  overflow: hidden;
  background-repeat: no-repeat;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 50px 0 0 50px;
  width: 50%;
}

.title {
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
}

.total {
  padding: 15px 0 40px 0;
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  font-family: 'Roboto';
}

.firstColumn {
  margin-right: 15px;
  margin-top: 20px;
  transform: rotate(3deg);
}

.secondColumn {
  margin: -20px -10px 0 0;
  transform: rotate(3deg);
}

.wrapper {
  width: 220px;
  height: 154px;
  margin: 15px 0;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
}
</style>
