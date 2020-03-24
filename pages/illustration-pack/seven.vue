<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="text">
          <h1 class="title">{{ $route.query.title }}</h1>
          <ul>
            <li>20 main scences</li>
            <li>5 bouns mockup</li>
            <li>PNG with & without background</li>
            <li>Different pose</li>
          </ul>
        </div>
      </div>
      <div class="firstColumn">
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }" />
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[1]})`,
              }" />
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[2]})`,
              }" />
      </div>
      <div class="secondColumn">
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[3]})`,
              }" />
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[2]})`,
              }" />
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[1]})`,
              }" />
      </div>
      <div class="thirdColumn">
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[2]})`,
              }" />
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[1]})`,
              }" />
        <div class="wrapper"  :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }" />
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
  background: #6ca0ff;
  overflow: hidden;
  color: white;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 50px 0 0 50px;
  width: 324px;
}

.title {
  font-weight: 600;
  font-size: 40px;
  line-height: 46px;
  padding-bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
  width: 324px;
}

.subtitle {
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  padding-bottom: 10px;
  opacity: 0.8;
  position: absolute;
  width: 330px;
}

ul {
  font-weight: normal;
  padding-left: 20px;
  opacity: 0.8;
}

.text {
  position: absolute;
}

.firstColumn {
  margin-right: 20px;
  margin-top: 261px;
}

.secondColumn {
  margin-right: 20px;
  margin-top: -40px;
}

.thirdColumn {
  margin-top: 60px;
  margin-right: -40px;
}

.last {
  position: absolute;
  bottom: 10px;
  left: 40px;
}

.wrapper {
  width: 161px;
  height: 161px;
  margin: 20px 0;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
