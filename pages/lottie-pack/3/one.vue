<template>
  <div class="container">
    <div class="titleWrapper">
      <h1 class="title">{{ $route.query.title }} {{ asset.text }}</h1>
    </div>
    <p class="total">{{ $route.query.total_items }} {{ asset.text }}</p>
    <div v-if="urls.length" class="wrapper">
      <div class="preview">
        <lottie :key="0" :url="urls[0]" :height="220" :width="294" loop />
      </div>
      <div class="preview two">
        <lottie :key="1" :url="urls[1]" :height="220" :width="294" loop />
      </div>
      <div class="preview">
        <lottie :key="2" :url="urls[2]" :height="220" :width="294" loop />
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie'

import CommonMixin from '@/components/mixins/common'

export default {
  components: {
    Lottie
  },

  mixins: [CommonMixin],

  data() {
    return {
      maxMockups: 3
    }
  },

  head: () => ({
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap'
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
body {
  font-family: 'Source Sans Pro';
}

.container {
  width: 720px;
  height: 480px;
  position: relative;
  overflow: hidden;
}

.titleWrapper {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  margin: 0;
  padding: 59px 0 10px 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  white-space: nowrap;
}

.total {
  text-align: center;
  padding: 0 150px 59px 150px;
  margin: 0;
  font-weight: normal;
  font-size: 21px;
  line-height: 130%;
  color: #596080;
  font-family: 'Roboto';
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: -108px;
}

.preview {
  width: 294px;
  height: 220px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  background-color: white;
}

.two {
  margin: 0 27px;
}
</style>
