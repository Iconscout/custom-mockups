<template>
  <div class="container">
    <div class="wrapper">
      <h1>
        {{ $route.query.title }} <br />
        {{ asset.text }}
      </h1>
      <p>{{ $route.query.total_items }} {{ asset.text }}</p>
    </div>
    <div class="imageWrapper">
      <div class="preview one">
        <lottie :key="0" :url="urls[0]" :height="400" :width="340" loop />
      </div>
      <div class="previewWrapeer">
        <div class="preview two">
          <lottie :key="1" :url="urls[1]" :height="320" :width="240" loop />
        </div>
        <div class="preview three">
          <lottie :key="2" :url="urls[2]" :height="320" :width="240" loop />
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
body {
  font-family: 'Source Sans Pro';
}

.container {
  overflow: hidden;
  width: 720px;
  height: 480px;
  position: relative;
}
.wrapper {
  padding: 20px;
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
  height: 340px;
}
.two {
  width: 320px;
  height: 240px;
}
.three {
  width: 320px;
  height: 240px;
}
</style>
