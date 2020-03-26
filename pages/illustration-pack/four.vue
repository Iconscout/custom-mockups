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
      <div class="firstColumn">
        <div
          class="wrapper"
          :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
        />
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
      </div>
      <div class="secondColumn">
        <div
          class="wrapper"
          :style="{
                backgroundImage: `url(${$route.query.url[3]})`,
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
                backgroundImage: `url(${$route.query.url[1]})`,
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
*,
body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  width: 720px;
  height: 480px;
  background-image: url('~assets/images/pattern-background.png');
      background-size: 1000px;
    background-position: -140px -70px;
  overflow: hidden;
  background-repeat: no-repeat;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 50px 0 0 50px;
  width: 50%;
}

.title {
  font-weight: bold;
  font-size: 36px;
  line-height: 110%;
  letter-spacing: 0.02em;
  width: 215px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.subtitle {
  font-weight: bold;
  font-size: 36px;
  line-height: 110%;
  letter-spacing: 0.02em;
}

.desc {
  padding: 15px 0 40px 0;
  line-height: 190%;
  letter-spacing: 0.05em;
  color: #9f9faf;
  width: 215px;
  font-weight: normal;
}

.firstColumn {
  margin-right: 15px;
  margin-top: 20px;
  transform: rotate(3deg);
}

.secondColumn {
  margin: -20px -10px 0 0;
  transform: rotate(3deg);
}

.wrapper {
  width: 220px;
  height: 154px;
  margin: 15px 0;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
}
</style>
