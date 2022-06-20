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
      <div class="rowGrid">
        <div class="row1">
          <div class="columnGrid">
            <div class="previewImage image1">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[0]})`
                }"
              />
            </div>
            <div class="previewImage image2">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[1]})`
                }"
              />
            </div>
            <div class="previewImage image3">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[2]})`
                }"
              />
            </div>
            <div class="previewImage image4">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="columnGrid">
            <div class="previewImage image5">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
            <div class="previewImage image6">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
            <div class="previewImage image7">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
            <div class="previewImage image8">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
          </div>
        </div>
        <div class="row3">
          <div class="columnGrid3">
            <div class="previewImage image9">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
            <div class="previewImage image10">
              <div
                class="image"
                :style="{
                  backgroundImage: `url(${urls[3]})`
                }"
              />
            </div>
          </div>
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
      maxMockups: 10
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
  padding: 150px 0 73px;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

/* .exclusiveImage {
  margin-bottom: 26px;
} */

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

.rowGrid {
  position: absolute;
  display: grid;
  transform: rotate(6deg);
  top: -148px;
  grid-template-rows: repeat(3, 202px);
  grid-gap: 16px;
  z-index: -1;
}

.row1 {
  margin-left: 50px;
}

.row2 {
  margin-left: -50px;
}

.row3 {
  margin-left: -90px;
}

.columnGrid {
  display: grid;
  grid-template-columns: repeat(8, 100px);
  grid-gap: 16px;
}

.columnGrid3 {
  display: grid;
  grid-template-columns: repeat(12, 101px);
  grid-gap: 20px;
}

.previewImage {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  filter: drop-shadow(0px 2.1967px 2.1967px rgba(0, 0, 0, 0.25));
  background-color: white;
}

.image {
  width: 181px;
  height: 181px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image1,
.image5 {
  /* background-color: #fffcdf; */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image2,
.image6 {
  /* background-color: #ecf1ff; */
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image3,
.image7 {
  /* background-color: #eafff0; */
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image4,
.image8 {
  /* background-color: #ffefef; */
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image9 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image10 {
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>
