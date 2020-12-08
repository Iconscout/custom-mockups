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
.container {
  width: 720px;
  height: 480px;
  /* background: #ffffff; */
  display: inline-flex;
  flex-wrap: wrap;
  padding: 24px 30px;
  overflow: hidden;
  box-sizing: border-box;
}

.image {
  width: 160px;
  height: 160px;
  max-width: 160px;
  max-height: 160px;
  margin: 28px 30px;
}
</style>
