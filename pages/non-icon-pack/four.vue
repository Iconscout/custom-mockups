<template>
  <div :style="{ backgroundColor: bgColor }" class="container">
    <div class="contentWrapper">
      <div class="content">
        <div :style="{ color: titleColor }" class="title">
          {{ $route.query.title }}
          <span class="assetText">{{ asset.text }}</span>
        </div>
        <div :style="{ color: titleColor }" class="descriptionText">
          {{ $route.query.total_items }} {{ asset.text }}
          {{ asset.value === '3d' ? 'Illustrations' : null }}
        </div>
      </div>
      <div :style="{ color: titleColor }" class="footerContent">
        Available formats:
        <div class="formatBadgeWrapper">
          <span
            v-for="format in formats"
            :key="format"
            :class="[
              'formatBadge',
              titleColor === '#000000' ? 'lightBadge' : 'darkBadge'
            ]"
          >
            {{ format.toUpperCase() }}
          </span>
        </div>
      </div>
    </div>
    <div class="imageWrapper">
      <template v-if="!$fetchState.pending && asset.value === 'lottie'">
        <div v-for="i in maxMockups" :key="i" class="image">
          <lottie
            :url="jsons[i - 1]"
            :width="203"
            :height="203"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
      </template>
      <div
        v-for="i in maxMockups"
        v-else
        :key="i"
        :style="{
          backgroundImage: `url(${urls[i - 1]})`
        }"
        class="image-fluid image"
      />
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
      maxMockups: 4
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
  justify-content: space-between;
}

.contentWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  margin-top: 42px;
  margin-bottom: 22px;
  max-width: 285px;
}

.descriptionText {
  max-width: 285px;
}

.footerContent {
  margin-bottom: 8px;
}

.imageWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 12px;
  margin: auto 0;
}

.image {
  width: 203px;
  height: 203px;
}
</style>
