<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">{{ $route.query.title }}</h1>
        <p class="desc">Create a unique illustration for a website, application, or presentation.</p>
        <div class="btnGroup">
          <button class="btn">.AI</button>
          <button class="btn">.EPS</button>
          <button class="btn">.SVG</button>
          <button class="btn">.PNG</button>
        </div>
      </div>
      <div
        class="heroImg"
        :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
      />
    </div>
    <div class="imgGrid">
      <div
        class="wrapper"
        :style="{
                backgroundImage: `url(${$route.query.url[1]})`,
              }"
      />
      <div
        class="wrapper"
        :style="{
                backgroundImage: `url(${$route.query.url[2]})`,
              }"
      />
      <div
        class="wrapper"
        :style="{
                backgroundImage: `url(${$route.query.url[3]})`,
              }"
      />
      <div
        class="wrapper"
        :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
      />
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
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700'
      }
    ]
  })
}
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  width: 720px;
  height: 480px;
  overflow: hidden;
}

.main {
  display: flex;
  position: relative;
}

.content {
  padding: 50px 0 0 50px;
  width: 246px;
  z-index: 10;
}

.title {
  font-weight: bold;
  font-size: 46px;
  line-height: 110%;
  letter-spacing: 0.02em;
}

.desc {
  padding: 16px 0 40px 0;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #3c3c3d;
}

.btnGroup {
  display: flex;
  flex-wrap: wrap;
  width: 206px;
}

.btn {
  width: 48px;
  height: 26px;
  border: 1px solid #dedede;
  border-radius: 4px;
  font-size: 14px;
  margin: 8px 8px 0 0;
}

.heroImg {
  width: 500px;
  height: 251px;
  margin: 40px 0 0 0;
  position: absolute;
  right: 0;
  top: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.imgGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 51px;
}

.wrapper {
  width: 150px;
  height: 110px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
