<template>
  <div class="container">
    <div class="bottomBackground">
      <svg
        width="417"
        height="493"
        viewBox="0 0 417 493"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="292"
          cy="292"
          r="292"
          :fill="
            $route.query.bg_color && $route.query.bg_color !== ''
              ? `#${$route.query.bg_color}`
              : `${bgColor}`
          "
        />
      </svg>
    </div>
    <div class="topBackground">
      <svg
        width="417"
        height="380"
        viewBox="0 0 417 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="179.328"
          cy="137.134"
          rx="219"
          ry="259"
          transform="rotate(-41.1419 179.328 137.134)"
          :fill="
            $route.query.bg_color && $route.query.bg_color !== ''
              ? `#${$route.query.bg_color}`
              : `${bgColor}`
          "
        />
      </svg>
    </div>
    <div class="contentWrapper">
      <div class="wrapper">
        <img
          v-if="isExclusive"
          src="@/assets/images/exclusive.svg"
          height="77"
          width="77"
          class="exclusiveImage"
        />
        <h1 :style="`color: ${packTitleColor};`" class="title">
          {{ $route.query.title }} <br />
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
      <div class="imageGrid">
        <div
          class="previewImage image1"
          :style="{
            backgroundImage: `url(${urls[0]})`
          }"
        />
        <div class="imageGridRow">
          <div
            class="previewImage image2"
            :style="{
              backgroundImage: `url(${urls[1]})`
            }"
          />
          <div
            class="previewImage image3"
            :style="{
              backgroundImage: `url(${urls[2]})`
            }"
          />
          <div
            class="previewImage image4"
            :style="{
              backgroundImage: `url(${urls[3]})`
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '@/components/mixins/common'

export default {
  mixins: [CommonMixin],

  data() {
    return {
      maxMockups: 4
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
  width: 834px;
  height: 556px;
  position: relative;
  overflow: hidden;
}

.topBackground {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.bottomBackground {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.contentWrapper {
  display: flex;
  padding: 25px 25px 18px 50px;
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
  margin-bottom: 64px;
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

.imageGrid {
  position: absolute;
  right: 25px;
  top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.imageGridRow {
  display: flex;
  gap: 16px;
}

.previewImage {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.image1 {
  width: 366px;
  height: 320px;
  margin-bottom: 12px;
}

.image2,
.image3,
.image4 {
  width: 180px;
  height: 180px;
}
</style>
