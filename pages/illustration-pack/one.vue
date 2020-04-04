<template>
  <div class="container">
    <div class="titleWrapper">
      <h1 class="title">
        {{ $route.query.title }} Illustrations
      </h1>
    </div>
    <p class="total">{{ $route.query.total_items }} Illustrations</p>
    <div class="wrapper">
      <div
        class="preview"
        :style="{
                backgroundImage: `url(${$route.query.url[0]})`,
              }"
      />
      <div
        class="preview two"
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
          'https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap'
      },
       {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lato&display=swap'
      },
    ]
  })
}
</script>

<style>
body {
  font-family: 'Nanum Gothic';
}

.container {
  width: 720px;
  height: 480px;
  position: relative;
  overflow: hidden;
}

.titleWrapper {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  margin: 0;
  padding: 59px 0 10px 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  white-space: nowrap;
}

.selections {
  background: linear-gradient(to top, #afdaf2 50%, transparent 50%);
}

.total {
  text-align: center;
  padding: 0 150px 59px 150px;
  margin: 0;
  font-weight: normal;
  font-size: 21px;
  line-height: 130%;
  color: #596080;
  font-family: 'Lato';
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: -108px;
}

.preview {
  width: 294px;
  height: 220px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  background-color: white;
}

.two {
  margin: 0 27px;
}
</style>
