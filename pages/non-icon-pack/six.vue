<template>
  <div :style="{ backgroundColor: bgColor }" class="container">
    <div
      v-for="i in maxMockups"
      :key="i"
      :style="{ backgroundColor: colors[colors.length - i] }"
      :class="`imageWrapper card${i}`"
    >
      <template v-if="!$fetchState.pending && asset.value === 'lottie'">
        <div class="image">
          <lottie
            :url="jsons[i - 1]"
            :width="265"
            :height="235"
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
  width: 315px;
  height: 315px;
  padding: 40px 24px;
  border: 2.5px solid #ffffff;
  border-radius: 69.2681px;
  margin-left: -87px;
}

.imageWrapper:first-child {
  margin-left: 0px;
}

.card1 {
  margin-top: auto;
  z-index: 2;
}

.card2 {
  z-index: 1;
}

.card3 {
  margin-bottom: auto;
}

.image {
  width: 265px;
  height: 235px;
}
</style>
