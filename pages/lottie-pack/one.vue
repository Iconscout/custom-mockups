<template>
  <div v-if="!$fetchState.pending" class="container">
    <div class="wrapperDiv">
      <div class="titleWrapper">
        <h1 class="title">
          {{ $route.query.title }} <br />
          {{ asset.text }}
        </h1>
      </div>
      <p class="total">{{ $route.query.total_items }} {{ asset.text }}</p>
      <div class="formatWrapper">
        <div class="formatTitle">
          Available Formats
        </div>
        <div
          v-for="(format, index) in formats"
          :key="index"
          class="formatBadgeWrapper"
        >
          <div class="formatBadge">{{ format.toUpperCase() }}</div>
        </div>
      </div>
    </div>
    <div v-if="urls.length" class="wrapper">
      <lottie
        :key="0"
        :url="jsons[0]"
        :height="420"
        :width="420"
        :loop="$route.query.loop === 'true'"
        :speed="$route.query.loop === 'true' ? 1 : 0"
      />
    </div>
    <div class="backgroundAnimation positionAbsolute">
      <lottie
        :key="0"
        :url="jsons[0]"
        :height="300"
        :width="360"
        :loop="$route.query.loop === 'true'"
        :speed="$route.query.loop === 'true' ? 1 : 0"
      />
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
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 720px;
  height: 480px;
  position: relative;
  overflow: hidden;
}

.positionAbsolute {
  position: absolute;
}

.backgroundAnimation {
  opacity: 0.1;
  top: 0;
  left: 0;
}

.formatWrapper {
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
}

.formatTitle {
  margin-bottom: 16px;
}

.formatBadgeWrapper {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 18px;
  height: 55px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
  padding: 10px;
}

.formatBadge {
  width: 80px;
  background: #ffffff;
  border-radius: 10px;
  padding: 8px;
}

.wrapperDiv {
  z-index: 1;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.titleWrapper {
  display: flex;
  justify-content: flex-end;
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
  padding: 0 40px 60px 60px;
  margin: 0;
  font-weight: normal;
  font-size: 21px;
  line-height: 130%;
  /* font-family: 'Roboto'; */
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
