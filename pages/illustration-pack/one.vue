<template>
  <div class="container">
    <h1 class="title">
      {{ $route.query.title }}
      <span class="selections">illustrations</span>
    </h1>
    <p class="desc">A set of well crafted-tech illustrations for your web and app projects.</p>
    <div class="wrapper">
      <div
        class="preview"
        :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
      />
      <div
        class="preview"
        :style="{
                backgroundImage: `url(${$route.query.url[1]})`,
              }"
      />
      <div
        class="preview"
        :style="{
                backgroundImage: `url(${$route.query.url[2]})`,
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
body {
  font-family: 'Source Sans Pro', sans-serif;
}

.container {
  width: 720px;
  height: 480px;
}

.title {
  text-align: center;
  margin: 0;
  padding: 50px 0 25px 0;
  font-weight: 600;
  font-size: 44px;
  line-height: 116.4%;
  letter-spacing: 0.04em;
}

.selections {
  background: linear-gradient(to top, #afdaf2 50%, transparent 50%);
}

.desc {
  text-align: center;
  padding: 0 150px;
  margin: 0;
  font-weight: normal;
  font-size: 22px;
  line-height: 160%;
  letter-spacing: 0.08em;
  color: #596080;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 40px;
}

.preview {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
