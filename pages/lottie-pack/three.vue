<template>
  <div v-if="!$fetchState.pending" class="container">
    <div class="wrapper">
      <h1 class="title">
        {{ $route.query.title }}
        {{ asset.text }}
      </h1>
      <p class="totalNumber">{{ $route.query.total_items }} {{ asset.text }}</p>
      <div class="formatWrapper">
        <div class="formatTitle">
          Available Formats
        </div>
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
    </div>
    <div class="previewWrapper">
      <div class="preview one">
        <lottie
          :key="0"
          :url="jsons[0]"
          :height="314"
          :width="240"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview two">
        <lottie
          :key="1"
          :url="jsons[1]"
          :height="314"
          :width="240"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="preview three">
        <lottie
          :key="2"
          :url="jsons[2]"
          :height="314"
          :width="240"
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
.container {
  overflow: hidden;
  width: 720px;
  height: 480px;
  position: relative;
}

.wrapper {
  padding: 50px 20px 0px;
  text-align: center;
}

.title {
  margin-bottom: 16px;
}

.totalNumber {
  margin-bottom: 16px;
}

.formatWrapper {
  text-align: center;
  width: 330px;
  margin: auto;
}

.formatTitle {
  margin-bottom: 16px;
}

.formatBadgesWrapper {
  display: flex;
  justify-content: center;
}

.formatBadgeWrapper {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 18px;
  height: 45px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px;
  padding: 10px;
}

.formatBadge {
  width: 80px;
  background: #ffffff;
  border-radius: 10px;
  padding: 8px;
}

.previewWrapper {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
}

.one,
.two,
.three {
  height: 233px;
  width: 233px;
}
</style>
