<template>
  <div class="container">
    <div class="wrapperDiv">
      <p class="total">{{ $route.query.total_items }}</p>
      <div class="titleWrapper">
        <h1 class="title">
          {{ $route.query.title }} <br />
          {{ asset.text }}
        </h1>
      </div>
    </div>
    <div v-if="urls.length" class="wrapper">
      <div class="preview">
        <lottie
          :key="0"
          :url="urls[0]"
          :height="400"
          :width="620"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
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
      maxMockups: 1
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

.wrapperDiv {
  z-index: 1;
  display: flex;
  padding: 0 40px;
  justify-content: center;
}

.titleWrapper {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  padding: 10px 0 10px 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  white-space: nowrap;
}

.total {
  text-align: center;
  margin-right: 20px;
  font-weight: normal;
  font-size: 100px;
  font-family: 'Roboto';
  bottom: 0px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
