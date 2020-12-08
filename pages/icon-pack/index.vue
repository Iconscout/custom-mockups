<template>
  <div
    :style="{ backgroundColor: `#${$route.query.bgColor}` }"
    class="container"
  >
    <img :src="urls[0]" class="image" />
    <img :src="urls[1]" class="image" />
    <img :src="urls[2]" class="image" />
    <img :src="urls[3]" class="image" />
    <img :src="urls[4]" class="image" />
    <img :src="urls[5]" class="image" />
  </div>
</template>
<script>
import CommonMixin from '@/components/mixins/common'

export default {
  mixins: [CommonMixin],

  data() {
    return {
      maxMockups: 6
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.container {
  width: 360px;
  height: 240px;
  /* background: #ffffff; */
  display: inline-flex;
  flex-wrap: wrap;
  padding: 12px 15px;
  overflow: hidden;
}

.image {
  width: 80px;
  height: 80px;
  max-width: 80px;
  max-height: 80px;
  margin: 14px 15px;
}
</style>
