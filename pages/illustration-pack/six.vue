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
          'https://fonts.googleapis.com/css?family=Muli:400,800&display=swap'
      }
    ]
  })
}
</script>

<style>
body {
  font-family: 'Muli';
}

.container {
  width: 720px;
  height: 480px;
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
  font-weight: 800;
  font-size: 36px;
  line-height: 130%;
  width: 215px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.subtitle {
  font-weight: 800;
  font-size: 36px;
  line-height: 130%;
}

.desc {
  line-height: 130%;
  color: #9f9faf;
  width: 215px;
  font-weight: 300;
  font-size: 21px;
  margin-top: 15px;
}

.wrapper {
  position: relative;
}

.preview1 {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 30px;
  z-index: 10;
  right: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.03);
border-radius: 15px;
}

.preview2 {
  width: 266px;
  height: 200px;
  position: absolute;
  top: 250px;
  right: 305px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.03);
border-radius: 15px;
}

.preview3 {
  width: 200px;
  height: 150px;
  z-index: 15;
  position: absolute;
  top: 290px;
  right: 40px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.03);
border-radius: 15px;
}
</style>
