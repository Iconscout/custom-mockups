<template>
  <div class="container">
    <div class="topBackground">
      <svg
        width="336"
        height="222"
        viewBox="0 0 336 222"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M333 126.594C311 213.594 246.393 221.594 181.5 221.594C116.607 221.594 0 100.987 0 36.0938C0 -28.7997 116.607 -13.4062 181.5 -13.4062C246.393 -13.4062 353.5 -34.4062 333 126.594Z"
          :fill="
            $route.query.bg_color && $route.query.bg_color !== ''
              ? `#${$route.query.bg_color}`
              : `${bgColor}`
          "
        />
      </svg>
      <svg
        width="220"
        height="213"
        viewBox="0 0 220 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M248 67.3204C248 130.191 193.885 219.604 65.5906 212.614C-10.9733 212.614 41.8774 138.18 41.8774 75.309C41.8774 12.4379 -45.023 -59 31.5408 -59C213.95 -52.0099 248 4.44931 248 67.3204Z"
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
        width="429"
        height="334"
        viewBox="0 0 429 334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M431 320.5C431 422.949 289.449 362.5 187 362.5C84.5512 362.5 0 291.449 0 189C0 86.5512 111.551 0 214 0C358 14 431 218.051 431 320.5Z"
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
      <div class="imageGrid">
        <div
          class="previewImage image1"
          :style="{
            backgroundImage: `url(${urls[0]})`
          }"
        />
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
  right: 0;
  z-index: -1;
  display: flex;
}

.bottomBackground {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.contentWrapper {
  display: flex;
  padding: 135px 0 70px 50px;
  justify-content: space-between;
}

.exclusiveImage {
  margin-bottom: 18px;
  margin-top: -35px;
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
  margin-bottom: 21px;
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

.previewImage {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
}

.image1 {
  width: 195px;
  height: 195px;
  left: 365px;
  top: 5px;
  transform: rotate(-15deg);
}

.image2 {
  width: 177px;
  height: 177px;
  right: 7px;
  top: 7px;
  transform: rotate(10deg);
}

.image3 {
  width: 280px;
  height: 280px;
  right: 70px;
  bottom: 0px;
  transform: rotate(15deg);
}
</style>
