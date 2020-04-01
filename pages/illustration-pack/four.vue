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
          'https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap'
      },
       {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto&display=swap'
      }
    ],
  })
}
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  font-family: 'Berkshire Swash';
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
  font-weight: normal;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.subtitle {
  font-weight: normal;
  font-size: 36px;
  line-height: 130%;
}

.desc {
  padding: 15px 0 40px 0;
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  font-family: 'Open Sans';
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
