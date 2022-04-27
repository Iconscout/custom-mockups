<template>
  <div v-if="!$fetchState.pending" class="container">
    <div class="wrapper">
      <font class="numberFont">{{ $route.query.total_items }}</font>
      <h1>
        {{ $route.query.title }} <br />
        {{ asset.text }}
      </h1>
    </div>
    <div class="imageWrapper">
      <div class="preview one">
        <lottie
          :key="0"
          :url="jsons[0]"
          :height="310"
          :width="310"
          :loop="$route.query.loop === 'true'"
          :speed="$route.query.loop === 'true' ? 1 : 0"
        />
      </div>
      <div class="previewWrapeer">
        <div class="preview two">
          <lottie
            :key="1"
            :url="jsons[1]"
            :height="320"
            :width="240"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
        <div class="preview three">
          <lottie
            :key="2"
            :url="jsons[2]"
            :height="320"
            :width="240"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
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
/* body {
  font-family: 'Source Sans Pro';
} */

.container {
  overflow: hidden;
  width: 720px;
  height: 480px;
  position: relative;
}

.wrapper {
  padding: 40px 20px 20px 40px;
  display: flex;
  align-items: center;
}

.numberFont {
  /* font-family: 'Times New Roman', Times, serif; */
  font-size: 100px;
  margin-right: 20px;
  font-weight: 600;
}

.imageWrapper {
  display: flex;
}

.previewWrapeer {
  position: absolute;
  top: 0;
  right: 0;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.one {
  width: 400px;
  height: 310px;
}

.two,
.three {
  width: 320px;
  height: 240px;
}
</style>
