<template>
  <div class="container">
    <div class="titleWrapper">
      <div class="totalNumber">
        <div class="number">{{ $route.query.total_items }}</div>
        {{ asset.text }}
      </div>
      <h1 class="title">
        {{ $route.query.title }}
        {{ asset.text }}
      </h1>
      <div class="formatBadgesWrapper">
        <div class="formatBadgeWrapper">
          <div class="formatBadge">JSON</div>
        </div>
        <div class="formatBadgeWrapper">
          <div class="formatBadge">AEP</div>
        </div>
        <div class="formatBadgeWrapper">
          <div class="formatBadge">GIF</div>
        </div>
      </div>
    </div>
    <div class="previewWrapper">
      <div class="preview">
        <lottie :key="0" :url="urls[0]" :height="200" :width="200" speed="0" />
      </div>
      <div class="preview">
        <lottie :key="1" :url="urls[1]" :height="200" :width="200" speed="0" />
      </div>
      <div class="preview">
        <lottie :key="2" :url="urls[2]" :height="200" :width="200" speed="0" />
      </div>
      <div class="preview">
        <lottie :key="3" :url="urls[3]" :height="200" :width="200" speed="0" />
      </div>
      <div class="preview">
        <lottie :key="4" :url="urls[4]" :height="200" :width="200" speed="0" />
      </div>
      <div class="preview">
        <lottie :key="5" :url="urls[5]" :height="200" :width="200" speed="0" />
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
}
.formatBadgeWrapper {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  height: 45px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
  padding: 6px;
}

.formatBadge {
  width: 55px;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px;
}
.previewWrapper {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 200px 200px 200px;
  grid-gap: 10px;
}
.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
