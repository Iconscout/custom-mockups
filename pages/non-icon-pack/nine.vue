<template>
  <div :style="{ backgroundColor: bgColor }" class="container">
    <div class="wrapper">
      <div v-for="i in maxMockups" :key="i" class="imageWrapper">
        <template v-if="!$fetchState.pending && asset.value === 'lottie'">
          <div>
            <lottie
              :url="jsons[i - 1]"
              :width="i === 2 ? 351 : 246"
              :height="i === 2 ? 302 : 210"
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
        <div
          :style="{
            backgroundColor: colors[colors.length - 1]
          }"
          class="header"
        >
          <div class="title">
            {{ $route.query.title }}
          </div>
        </div>
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

.wrapper {
  position: absolute;
  left: -98px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageWrapper {
  position: relative;
  background: white;
  width: 432px;
  height: 432px;
  border-radius: 45px;
  margin-right: 25px;
  padding: 34px 40px 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.imageWrapper:last-child {
  margin-right: 0;
}

.imageWrapper:first-child,
.imageWrapper:last-child {
  padding: 32px 13px;
  width: 274px;
  height: 274px;
  border-radius: 28.5417px;
}

.imageWrapper:first-child > .header,
.imageWrapper:last-child > .header {
  display: none;
}

.image {
  width: 352px;
  height: 302px;
  padding: 34px 40px 0px;
}

.imageWrapper:first-child > .image,
.imageWrapper:last-child > .image {
  width: 246px;
  height: 210px;
}

.header {
  position: absolute;
  width: 432px;
  height: 71px;
  bottom: 0;
  left: 0;
  border-radius: 0 0 45px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 32px;
  max-width: 333px;
  line-height: 36px;
  color: white;
}
</style>
