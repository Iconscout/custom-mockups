<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="titleWrapper">
          <h1 class="title">{{ $route.query.title }}</h1>
          <h2 class="subtitle">Illustrations</h2>
        </div>
        <p class="desc">{{ $route.query.description }}</p>
      </div>
      <div class="pattern">
        <img src="@/assets/images/box-pattern.png" />
      </div>
      <div class="wrapper">
        <div
          class="preview1"
          :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
        />
        <div
          class="preview2"
          :style="{
                backgroundImage: `url(${$route.query.url[1]})`,
              }"
        />
        <div
          class="preview3"
          :style="{
                backgroundImage: `url(${$route.query.url[2]})`,
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
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700'
      }
    ]
  })
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
}

.container {
  width: 720px;
  height: 480px;
  background: #fafcff;
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
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: 0.05em;
  width: 215px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.subtitle {
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: 0.05em;
}

.desc {
  line-height: 190%;
  letter-spacing: 0.05em;
  color: #9f9faf;
  width: 215px;
  font-weight: normal;
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
}
</style>
