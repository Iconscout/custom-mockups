<template>
  <div class="container">
    <div
      class="background"
      :style="
        `background-color: #${
          $route.query.bg_color && $route.query.bg_color !== ''
            ? $route.query.bg_color
            : bgColor && bgColor.replace('#', '')
        };`
      "
    >
      <img src="@/assets/images/dot-bg.svg" />
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
      <div class="imageGrid">
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[0]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[1]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[2]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[3]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[4]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[5]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[6]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[7]})`
            }"
          />
        </div>
        <div class="bgRound">
          <div
            class="previewImage"
            :style="{
              backgroundImage: `url(${urls[8]})`
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
      maxMockups: 9
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

.background {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.contentWrapper {
  display: flex;
  padding: 60px 9px 60px 48px;
  justify-content: space-between;
}

.exclusiveImage {
  margin-bottom: 26px;
}

.numberText {
  margin-bottom: 56px;
}

.imageGrid {
  display: grid;
  grid-template-columns: 136px 136px 136px;
  grid-template-rows: 136px 136px 136px;
  grid-gap: 12px 12px;
}

.imageGridRow {
  display: flex;
  gap: 16px;
}

.previewImage {
  width: 136px;
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.bgRound {
  background: white;
  border-radius: 50%;
}
</style>
