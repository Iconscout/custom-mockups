<template>
  <div v-if="!$fetchState.pending" class="container grid">
    <div
      :style="{
        backgroundColor: colors[colors.length - 1]
      }"
      class="card1"
    >
      <template v-if="asset.value === 'lottie'">
        <div>
          <lottie
            :url="jsons[0]"
            :width="423"
            :height="362"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
      </template>
      <div
        v-else
        :style="{
          backgroundImage: `url(${urls[0]})`
        }"
        class="image-fluid image"
      />
    </div>
    <div
      :style="{
        backgroundColor: colors[colors.length - 2]
      }"
      class="card2"
    >
      <template v-if="asset.value === 'lottie'">
        <div>
          <lottie
            :url="jsons[1]"
            :width="275"
            :height="236"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
      </template>
      <div
        v-else
        :style="{
          backgroundImage: `url(${urls[1]})`
        }"
        class="image-fluid image"
      />
    </div>
    <div
      :style="{
        backgroundColor: colors[colors.length - 3]
      }"
      class="card3"
    >
      <template v-if="asset.value === 'lottie'">
        <div>
          <lottie
            :url="jsons[2]"
            :width="275"
            :height="236"
            :loop="$route.query.loop === 'true'"
            :speed="$route.query.loop === 'true' ? 1 : 0"
          />
        </div>
      </template>
      <div
        v-else
        :style="{
          backgroundImage: `url(${urls[2]})`
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

.grid {
  display: grid;
  grid-template-columns: auto auto;
}

.card1 {
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card1 > .image {
  width: 423px;
  height: 362px;
}

.card2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card2 > .image,
.card3 > .image {
  width: 275px;
  height: 236px;
}
</style>
