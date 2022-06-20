<template>
  <div class="container">
    <div class="contentWrapper">
      <div class="wrapper">
        <img
          v-if="isExclusive"
          src="@/assets/images/exclusive.svg"
          height="77"
          width="77"
          class="exclusiveImage"
        />
        <h1 class="title">Illustration Pack Name</h1>
        <div class="numberText">10 Illustrations</div>
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
        <div
          class="previewImage image4"
          :style="{
            backgroundImage: `url(${urls[3]})`
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

.contentWrapper {
  display: flex;
  padding: 25px 20px 25px 48px;
  justify-content: space-between;
}

.exclusiveImage {
  margin-bottom: 26px;
}

.title {
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  max-width: 342px;
}

.numberText {
  font-weight: 400;
  font-size: 34px;
  line-height: 72px;
  margin-bottom: 56px;
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
  display: grid;
  grid-template-columns: repeat(3, 160px);
  grid-template-rows: repeat(3, 165px);
  grid-gap: 10px;
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
  background-color: #fffcdf;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image2 {
  background-color: #ecf1ff;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.image3 {
  background-color: #eafff0;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
}

.image4 {
  background-color: #ffefef;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
</style>
