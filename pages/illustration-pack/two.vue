<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">{{ $route.query.title }}</h1>
        <p class="subtitle">Buisness Illustration</p>
        <p class="desc">
          20 Creative scence Buisness illustrations. Ready to use for presentation. Website Mobile and all
          needs.
        </p>
      </div>
      <div class="wrapper">
        <div class="previewBg"></div>
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
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 0 0 0 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-weight: 600;
  font-size: 41px;
  line-height: 52px;
  letter-spacing: 0.05em;
}

.subtitle {
  padding: 6px 0 13px 0;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.08em;

  color: #3c3c3d;
}

.desc {
  padding: 0 40px 0 0;
  font-size: 9px;
  line-height: 190%;
  letter-spacing: 0.05em;
  color: #9f9faf;
  width: 190px;
}

.wrapper {
  position: relative;
}

.previewBg {
  height: 419px;
  width: 390px;
  border-bottom-left-radius: 30px;
  background: #bce2ff;
}

.preview1 {
  width: 360px;
  height: 261px;
  position: absolute;
  top: 0;
  z-index: 5;
  right: 0;
  box-shadow: -10px 8px 10px rgba(146, 199, 241, 0.8);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.preview2 {
  width: 280px;
  height: 200px;
  position: absolute;
  top: 150px;
  z-index: 10;
  right: 145px;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.preview3 {
  width: 227px;
  height: 163px;
  z-index: 15;
  position: absolute;
  top: 300px;
  right: 20px;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
