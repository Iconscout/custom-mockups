<template>
  <div :style="{ backgroundColor: bgColor }" class="container">
    <lottie
      v-if="!$fetchState.pending && asset.value === 'lottie'"
      :url="jsons[0]"
      :width="734"
      :height="456"
      :loop="$route.query.loop === 'true'"
      :speed="$route.query.loop === 'true' ? 1 : 0"
    />
    <div
      v-else
      :style="{
        backgroundImage: `url(${urls[0]})`
      }"
      class="imageWrapper image-fluid"
    ></div>
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
@import '~/assets/style/common.css';

.container {
  padding: 50px;
}

.imageWrapper {
  width: 734px;
  height: 456px;
}
</style>
