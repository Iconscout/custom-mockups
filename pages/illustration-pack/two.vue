<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="titleWrapper">
          <h1 class="title">{{ $route.query.title }} Illustrations</h1>
        </div>
        <p class="total">{{ $route.query.total_items }} Illustrations</p>
      </div>
      <div class="pattern">
        <img src="@/assets/images/box-pattern.png" />
      </div>
      <div class="wrapper">
        <div
          class="preview1"
          :style="{
            backgroundImage: `url(${$route.query.url[0]})`
          }"
        />
        <div
          class="preview2"
          :style="{
            backgroundImage: `url(${$route.query.url[1]})`
          }"
        />
        <div
          class="preview3"
          :style="{
            backgroundImage: `url(${$route.query.url[2]})`
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap'
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
  font-family: 'Roboto Slab';
}

.container {
  width: 720px;
  height: 480px;
  overflow: hidden;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  display: block;
  padding: 60px 0 0 60px;
}

.pattern {
  position: absolute;
  top: 247px;
  right: 479px;
}

.titleWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-weight: 900;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
}

.total {
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  font-family: 'Roboto';
  margin-top: 15px;
}

.wrapper {
  position: relative;
}

.preview1 {
  width: 360px;
  height: 270px;
  position: absolute;
  top: -20px;
  z-index: 5;
  right: 0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 15px;
}

.preview2 {
  width: 280px;
  height: 210px;
  position: absolute;
  top: 142px;
  z-index: 10;
  right: 145px;
  border-radius: 18px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
}

.preview3 {
  width: 220px;
  height: 165px;
  z-index: 9;
  position: absolute;
  top: 282px;
  right: 26px;
  border-radius: 8px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
}
</style>
