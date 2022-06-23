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
        <div class="imageCard imageCard1">
          <div
            class="image1"
            :style="{
              backgroundImage: `url(${urls[0]})`
            }"
          />
          <div class="imageTitleBlock1">Lorem Ipsum</div>
          <div class="imageDescriptionBlock2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div class="threeDots">
            <div v-for="index in 3" :key="index">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="4"
                viewBox="0 0 5 4"
                fill="none"
              >
                <circle
                  r="1.62542"
                  transform="matrix(0.92881 0.370557 -0.363576 0.931564 2.44909 2.01592)"
                  :fill="index === 1 ? 'black' : '#aaaaaa'"
                />
              </svg>
            </div>
          </div>
          <div class="imageBtn">
            Semper Venenatis
          </div>
        </div>
        <div class="imageCard imageCard2">
          <div class="imageCardHeader">
            <img
              src="@/assets/images/template-logo.svg"
              width="27"
              height="22"
            />
            <ul class="unstyledList">
              <li>Home</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="imageContentWrapper">
            <div class="content">
              <div class="contentTitle">Egestas Accumsan</div>
              <div class="contentDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="btnWrapper">
                <div class="imageBtn">
                  Semper Venenatis
                </div>
                <div class="light imageBtn">
                  quis nibh
                </div>
              </div>
            </div>
            <div
              class="image2"
              :style="{
                backgroundImage: `url(${urls[1]})`
              }"
            />
          </div>
        </div>
        <div class="imageCard imageCard3">
          <div
            class="image1"
            :style="{
              backgroundImage: `url(${urls[2]})`
            }"
          />
          <div class="imageTitleBlock1">Lorem Ipsum</div>
          <div class="imageDescriptionBlock2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div class="threeDots">
            <div v-for="index in 3" :key="index">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="4"
                viewBox="0 0 5 4"
                fill="none"
              >
                <circle
                  r="1.62542"
                  transform="matrix(0.92881 0.370557 -0.363576 0.931564 2.44909 2.01592)"
                  :fill="index === 1 ? 'black' : '#aaaaaa'"
                />
              </svg>
            </div>
          </div>
          <div class="imageBtn">
            Semper Venenatis
          </div>
        </div>
        <div class="imageCard imageCard4">
          <div class="imageCardHeader">
            <img
              src="@/assets/images/template-logo.svg"
              width="27"
              height="22"
            />
            <ul class="unstyledList">
              <li>Home</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="imageContentWrapper">
            <div class="content">
              <div class="contentTitle">Egestas Accumsan</div>
              <div class="contentDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="btnWrapper">
                <div class="imageBtn">
                  Semper Venenatis
                </div>
                <div class="light imageBtn">
                  quis nibh
                </div>
              </div>
            </div>
            <div
              class="image2"
              :style="{
                backgroundImage: `url(${urls[3]})`
              }"
            />
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
  padding: 80px 0 108px 48px;
  justify-content: space-between;
}

.exclusiveImage {
  margin-bottom: 34px;
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

.imageGrid {
  position: absolute;
  display: grid;
  transform: rotate(22deg);
  top: -50px;
  right: -164px;
  grid-template-rows: repeat(6, 77px);
  grid-template-columns: repeat(5, 144px);
  grid-gap: 15px;
  z-index: -1;
}

.imageCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  filter: drop-shadow(0px 2.1967px 2.1967px rgba(0, 0, 0, 0.25));
  background-color: white;
}

.imageCard1,
.imageCard2 {
  padding: 20px 10px 16px;
}

.imageCard3,
.imageCard4 {
  padding: 12px 25px 25px;
}

.imageCard1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 5;
}

.imageCard2 {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
}

.imageCard3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 7;
}

.imageCard4 {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 7;
}

.imageCardHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px 0;
}

.imageContentWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15px 10px;
}

.contentTitle {
  font-size: 20px;
  font-weight: 700;
  width: 95px;
  margin-bottom: 14px;
}

.contentDesc {
  font-size: 9px;
  color: #888888;
  width: 124.59px;
  margin-bottom: 20px;
}

.btnWrapper {
  display: flex;
}

.light {
  color: black !important;
  border: 1px solid #000000;
  background: white !important;
  margin-left: 6px;
}

.unstyledList {
  list-style-type: none;
  display: flex;
}

.unstyledList > li {
  margin-right: 13px;
  font-size: 8px;
  font-weight: 700;
}

.image1,
.image2 {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.image1 {
  width: 125px;
  height: 125px;
}

.image2 {
  width: 193px;
  height: 193px;
}

.imageTitleBlock1 {
  width: 75px;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 6px;
  margin-top: 6px;
}

.imageDescriptionBlock2 {
  text-align: center;
  width: 125px;
  color: #888888;
  font-size: 8px;
  line-height: 9.29px;
}

.threeDots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.imageBtn {
  background-color: black;
  color: white;
  width: 58px;
  height: 15px;
  border-radius: 16px;
  font-size: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
