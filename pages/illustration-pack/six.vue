<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">{{ $route.query.title }}</h1>
        <p class="subtitle">Modern Illustration</p>
        <p class="desc">20 crafted scences illustration 10 prebuild screens</p>

        <div class="pattern">
          <img src="@/assets/images/red-dots.svg" height="80" />
        </div>
        <div class="pattern2">
          <img src="@/assets/images/white-dots.svg" height="80" />
        </div>
      </div>
      <div class="bg"></div>
      <div
        class="preview"
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
  position: relative;
}

.pattern {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.pattern2 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
}

.main {
  display: flex;
  justify-content: space-between;
}

.content {
  padding: 0 63px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 153px;
}

.name {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #12135f;
  margin-left: 10px;
}

.title {
  font-weight: bold;
  font-size: 41px;
  line-height: 52px;
  letter-spacing: 0.08em;
  color: #e45149;
  letter-spacing: 0.07em;
}

.subtitle {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.07em;
  color: #e45149;
  padding: 5px 0 15px 0;
}

.desc {
  font-size: 12px;
  line-height: 21px;
  color: #3c3c3d;
  padding-bottom: 17px;
}

.bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 303px;
  height: 284px;
  background: #78bcff;
}

.preview {
  width: 460px;
  height: 400px;
  margin: 30px 0;
  z-index: 10;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
