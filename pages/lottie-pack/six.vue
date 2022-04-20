<template>
  <div v-if="!$fetchState.pending" class="container">
    <div class="titleWrapper">
      <div class="totalNumber">
        <div class="number">{{ $route.query.total_items }}</div>
      </div>
      <h1 class="title">
        {{ $route.query.title }}
        {{ asset.text }}
      </h1>
      <div class="formatBadgesWrapper">
        <div
          v-for="(format, index) in formats"
          :key="index"
          class="formatBadgeWrapper"
        >
          <div class="formatBadge">{{ format.toUpperCase() }}</div>
        </div>
      </div>
    </div>
    <div class="previewWrapper">
      <div class="preview">
        <lottie
          :key="0"
          :url="jsons[0]"
          :height="154"
          :width="200"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview">
        <lottie
          :key="1"
          :url="jsons[1]"
          :height="154"
          :width="200"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview">
        <lottie
          :key="2"
          :url="jsons[2]"
          :height="154"
          :width="200"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview">
        <lottie
          :key="3"
          :url="jsons[3]"
          :height="154"
          :width="200"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview">
        <lottie
          :key="4"
          :url="jsons[4]"
          :height="154"
          :width="200"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview">
        <lottie
          :key="5"
          :url="jsons[5]"
          :height="154"
          :width="200"
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
      maxMockups: 6
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
  overflow: hidden;
  width: 720px;
  height: 480px;
  position: relative;
  display: flex;
  align-items: center;
}

.titleWrapper {
  width: 320px;
  word-wrap: break-word;
  text-align: center;
}

.totalNumber {
  margin-bottom: 20px;
}

.number {
  font-size: 5rem;
  font-weight: bold;
}

.formatBadgesWrapper {
  display: flex;
  width: 250px;
  margin: 150px auto 0px;
  justify-content: center;
}

.formatBadgeWrapper {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  height: 45px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px;
  padding: 8px;
}

.formatBadge {
  width: 80px;
  background: #ffffff;
  border-radius: 10px;
  padding: 8px;
}

.previewWrapper {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 154px 154px 154px;
  grid-gap: 10px;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
