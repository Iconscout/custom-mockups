<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">Illustration Pack</h1>
        <p class="desc">Create a unique illustration for a website, application, or presentation.</p>
        <div class="btnGroup">
          <button class="btn">.AI</button>
          <button class="btn">.EPS</button>
          <button class="btn">.SVG</button>
          <button class="btn">.PNG</button>
        </div>
      </div>
      <div class="heroImg">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/discussing-in-library-2161952-1816244.png"
          class="img"
        />
      </div>
    </div>
    <div class="imgGrid">
      <div class="wrapper">
        <img
          class="img"
          src="https://cdni.iconscout.com/illustration/premium/thumb/architect-showing-blueprint-of-construction-site-and-planning-2130015-1798025.png"
        />
      </div>
      <div class="wrapper">
        <img
          class="img"
          src="https://cdni.iconscout.com/illustration/premium/thumb/architect-showing-blueprint-of-construction-site-and-planning-2130015-1798025.png"
        />
      </div>
      <div class="wrapper">
        <img
          class="img"
          src="https://cdni.iconscout.com/illustration/premium/thumb/architect-showing-blueprint-of-construction-site-and-planning-2130015-1798025.png"
        />
      </div>
      <div class="wrapper">
        <img
          class="img"
          src="https://cdni.iconscout.com/illustration/premium/thumb/architect-showing-blueprint-of-construction-site-and-planning-2130015-1798025.png"
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
  overflow: hidden;
}

.main {
  display: flex;
  position: relative;
}

.content {
  padding: 50px 0 0 50px;
  width: 246px;
  z-index: 10;
}

.title {
  font-weight: bold;
  font-size: 46px;
  line-height: 110%;
  letter-spacing: 0.02em;
}

.desc {
  padding: 16px 0 40px 0;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  color: #3c3c3d;
}

.btnGroup {
  display: flex;
  flex-wrap: wrap;
  width: 206px;
}

.btn {
  width: 48px;
  height: 26px;
  border: 1px solid #dedede;
  border-radius: 4px;
  font-size: 14px;
  margin: 8px 8px 0 0;
}

.heroImg {
  max-width: 500px;
  height: 251px;
  object-fit: cover;
  padding: 90px 0 0 0;
  position: absolute;
  right: 0;
  top: 0;
}

.img {
  width: 100%;
  height: 100%;
}

.imgGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 51px;
}

.wrapper {
  width: 150px;
  height: 110px;
}
</style>
