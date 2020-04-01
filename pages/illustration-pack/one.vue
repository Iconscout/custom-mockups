<template>
  <div class="container">
    <div class="titleWrapper">
      <h1 class="title">
        {{ $route.query.title }} illustrations
      </h1>
    </div>
    <p class="desc">{{ $route.query.description }}</p>
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
          'https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap'
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
body {
  font-family: 'Quicksand';
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
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.selections {
  background: linear-gradient(to top, #afdaf2 50%, transparent 50%);
}

.desc {
  text-align: center;
  padding: 0 150px 59px 150px;
  margin: 0;
  font-weight: normal;
  font-size: 21px;
  line-height: 130%;
  color: #596080;
  font-family: 'Roboto';
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
}

.two {
  margin: 0 27px;
}
</style>
