<template>
  <div class="container">
    <div class="rightBackground">
      <svg
        width="563"
        height="556"
        viewBox="0 0 563 556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M160 243C195 53 51.5 -106.667 0 -161L594 -117.5V823L230.5 804.5C-43.5 617.5 131.275 398.936 160 243Z"
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
          {{ asset.value === '3d' ? 'Illustrations' : null }}
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

.rightBackground {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.contentWrapper {
  display: flex;
  padding: 46px 0 46px 48px;
  justify-content: space-between;
}

.exclusiveImage {
  margin-bottom: 26px;
}

.numberText {
  margin-bottom: 56px;
}

.previewImage1 {
  width: 420px;
  height: 465px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
