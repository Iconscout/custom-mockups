<template>
  <div :style="{ backgroundColor: bgColor }" class="container">
    <div
      v-for="i in maxMockups"
      :key="i"
      :style="{ backgroundColor: colors[colors.length - i] }"
      class="imageWrapper"
    >
      <div class="header">
        <div class="title">
          {{ $route.query.title }}
          <span class="assetText">{{ asset.text }} Pack</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="13"
          viewBox="0 0 19 13"
          fill="none"
        >
          <line
            x1="1.27811"
            y1="1.64865"
            x2="17.4977"
            y2="1.64865"
            stroke="black"
            stroke-width="1.59528"
            stroke-linecap="round"
          />
          <line
            x1="1.27811"
            y1="4.83908"
            x2="17.4977"
            y2="4.83908"
            stroke="black"
            stroke-width="1.59528"
            stroke-linecap="round"
          />
          <line
            x1="1.27811"
            y1="8.03049"
            x2="17.4977"
            y2="8.03049"
            stroke="black"
            stroke-width="1.59528"
            stroke-linecap="round"
          />
          <line
            x1="1.27811"
            y1="11.2209"
            x2="17.4977"
            y2="11.2209"
            stroke="black"
            stroke-width="1.59528"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <template v-if="!$fetchState.pending && asset.value === 'lottie'">
        <div class="image">
          <lottie
            :url="jsons[i - 1]"
            :width="192"
            :height="171"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
      </template>
      <div
        v-else
        :style="{
          backgroundImage: `url(${urls[i - 1]})`
        }"
        class="image-fluid image"
      />
      <div class="dots">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4.05776" cy="4.11196" r="3.72231" fill="black" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4.05776" cy="4.11196" r="3.72231" fill="white" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4.05776" cy="4.11196" r="3.72231" fill="white" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '@/components/mixins/common'

import Lottie from '@/components/Lottie'

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
@import '~/assets/style/common.css';

.container {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageWrapper {
  width: 210px;
  height: 371px;
  padding: 26px 9px;
  border-radius: 22px;
  margin-right: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  margin: 0 10px;
  margin-bottom: 39px;
  justify-content: space-between;
}

.title {
  font-size: 12px;
  max-width: 140px;
  margin-right: 8px;
  line-height: 14px;
}

.assetText {
  font-size: 10px;
}

.descriptionText {
  font-size: 14px;
  max-width: 175px;
  margin: 16px auto 24px auto;
}

.imageWrapper:last-child {
  margin-right: 0px;
}

.image {
  width: 192px;
  height: 171px;
}

.dots {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dots > svg {
  margin-right: 5px;
}

.dots > svg:last-child {
  margin-right: 0;
}
</style>
