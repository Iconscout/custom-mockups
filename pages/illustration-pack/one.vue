<template>
  <div class="container">
    <div class="topBackground">
      <svg
        width="454"
        height="471"
        viewBox="0 0 454 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M137.5 168.5C-62.9 132.1 -0.66666 -78.6667 55.5 -179.5L540.5 -66.5C545.667 118.667 523.6 485.3 394 470.5C232 452 388 214 137.5 168.5Z"
          :fill="
            $route.query.bg_color && $route.query.bg_color !== ''
              ? `#${$route.query.bg_color}`
              : `${bgColor}`
          "
        />
      </svg>
    </div>
    <div class="bottomBackground">
      <svg
        width="681"
        height="108"
        viewBox="0 0 681 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M279 48C131.8 -38.8 -33 11.8333 -97 48C-116 259 449.5 232 585 229.5C720.5 227 693 116 617 132C541 148 463 156.5 279 48Z"
          :fill="
            $route.query.bg_color && $route.query.bg_color !== ''
              ? `#${$route.query.bg_color}`
              : `${bgColor}`
          "
        />
      </svg>
    </div>
    <!-- <div class="flexDiv">
      <div
        v-for="(color, i) in palette"
        :key="i"
        :style="{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }"
        class="colorDiv"
      ></div>
    </div> -->
    <div class="contentWrapper">
      <div class="wrapper">
        <img
          v-if="isExclusive"
          src="@/assets/images/exclusive.svg"
          height="77"
          width="77"
          class="exclusiveImage"
        />
        <h1 class="title">
          <span :style="`color: ${packTitleColor};`">{{
            $route.query.title
          }}</span>
          <br />
          {{ asset.text }} Pack
        </h1>
        <div class="numberText">
          {{ $route.query.total_items }} {{ asset.text }}
        </div>
        <div class="formatBadgeWrapper">
          <div v-for="format in formats" :key="format" class="formatBadge">
            {{ format.toUpperCase() }}
          </div>
        </div>
      </div>
      <div
        class="previewImage1"
        :style="{
          backgroundImage: `url(${urls[0]})`
        }"
      />
    </div>
  </div>
</template>

<script>
import CommonMixin from '@/components/mixins/common'

export default {
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

/* .flexDiv {
  display: flex;
}
.colorDiv {
  height: 20px;
  width: 20px;
  border-radius: 10px;
} */

.container {
  width: 834px;
  height: 556px;
  position: relative;
  overflow: hidden;
}

.topBackground {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.bottomBackground {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.contentWrapper {
  display: flex;
  padding: 50px 23px 50px 50px;
  justify-content: space-between;
}

.exclusiveImage {
  margin-bottom: 8px;
}

.title {
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  max-width: 350px;
  max-height: 210px;
  overflow: hidden;
}

.numberText {
  font-weight: 400;
  font-size: 34px;
  line-height: 72px;
  margin-bottom: 20px;
}

.formatBadgeWrapper {
  display: flex;
}

.formatBadge {
  width: 50px;
  height: 28px;
  background: #000000;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}

.previewImage1 {
  width: 410px;
  height: 455px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
