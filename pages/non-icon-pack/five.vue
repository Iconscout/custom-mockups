<template>
  <div :style="{ backgroundColor: bgColor }" class="container">
    <div class="wrapper">
      <div
        v-for="i in maxMockups"
        :key="i"
        :style="{ backgroundColor: colors[colors.length - 4 + i] }"
        :class="`imageWrapper card${i}`"
      >
        <template v-if="!$fetchState.pending && asset.value === 'lottie'">
          <div class="image">
            <lottie
              :url="jsons[i - 1]"
              :width="237"
              :height="210"
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
    <div :style="{ color: titleColor }" class="title">
      {{ $route.query.title }}
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
  flex-direction: column;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
}

.imageWrapper {
  width: 252px;
  height: 340px;
  padding: 64px 10px;
  border: 2.5px solid #ffffff;
  border-radius: 69.2681px;
  margin-left: -100px;
}

.card1 {
  transform: rotate(-12.44deg);
  margin-top: 14px;
}

.card2 {
  transform: rotate(-2.44deg);
}

.card3 {
  transform: rotate(7.56deg);
  margin-top: 18px;
}

.image {
  width: 237px;
  height: 210px;
}

.title {
  text-align: center;
  margin-bottom: 14px;
  max-width: 100%;
  line-height: 64px;
}
</style>
