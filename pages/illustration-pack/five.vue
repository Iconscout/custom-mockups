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

      <div class="pattern1">
        <img src="@/assets/images/dots.png" />
      </div>

      <div class="pattern2">
         <img src="@/assets/images/dots.png" />
      </div>

      <div
        class="wrapper last"
        :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
      />
      <div class="firstColumn">
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
          'https://fonts.googleapis.com/css?family=Volkhov:400,700&display=swap'
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
  font-family: 'Volkhov';
}
.container {
  width: 720px;
  height: 480px;
  overflow: hidden;
  position: relative;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.pattern1 {
  position: absolute;
  top: 215px;
  left: -15px;
}

.pattern2 {
   position: absolute;
   left: 201px;
   top: -11px;
}

.content {
  padding: 50px 0 0 50px;
  width: 50%;
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
  padding: 15px 0 40px 0;
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-family: 'Open Sans';
  font-size: 21px;
}

.firstColumn {
  margin-right: 20px;
  transform: rotate(5deg);
  margin-top: -20px;
}

.secondColumn {
  transform: rotate(5deg);
  margin-top: -30px;
}

.last {
  position: absolute;
  bottom: 10px;
  left: 65px;
  transform: rotate(5deg);
}

.wrapper {
  width: 200px;
  height: 150px;
  margin: 20px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.03);
border-radius: 10px;
}
</style>
