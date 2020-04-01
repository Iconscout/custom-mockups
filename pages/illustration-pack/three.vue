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
                backgroundImage: `url(${$route.query.url[4]})`,
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
          'https://fonts.googleapis.com/css?family=Playfair+Display:400,600&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      },
    ]
  })
}
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display';
}
.container {
  width: 720px;
  height: 480px;
  overflow: hidden;
  position: relative;
}

.main {
  display: flex;
}

.content {
  padding: 50px 0 0 50px;
  width: 246px;
  z-index: 10;
}

.title {
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.subtitle {
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
}

.desc {
  padding: 16px 0 40px 0;
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  font-family: 'Roboto';
}

.heroImg {
  width: 430px;
  height: 322px;
  position: absolute;
  right: 0;
  top: -20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.03);
}

.imgGrid {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  position: absolute;
  left: -65px;
  bottom: 40px;
}

.wrapper {
  width: 140px;
  height: 105px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 15px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.03);
border-radius: 5px;
}
</style>
