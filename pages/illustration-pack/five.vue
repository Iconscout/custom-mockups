<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">Splashy Illustrations</h1>
      </div>
      <div class="wrapper last">
        <img
          class="img"
          src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
        />
      </div>
      <div class="firstColumn">
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
          />
        </div>
      </div>
      <div class="secondColumn">
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/free/thumb/science-law-1970126-1662903.png"
          />
        </div>
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
  background-image: url('~assets/images/background-black.png');
  background-size: contain;
  overflow: hidden;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 50px 0 50px 42px;
  width: 50%;
}

.title {
  font-size: 44px;
  font-weight: bold;
  margin-top: 21px;
  color: #fff;
}

.firstColumn {
  margin-right: 30px;
  transform: rotate(5deg);
  margin-top: -30px;
}

.secondColumn {
  transform: rotate(5deg);
  margin-top: -30px;
  margin-right: -20px;
}

.last {
  position: absolute;
  bottom: 10px;
  left: 65px;
  transform: rotate(5deg);
}

.wrapper {
  width: 200px;
  height: 142px;
  margin: 30px 0;
  object-fit: contain;
}

.img {
  width: 100%;
  height: 100%;
}
</style>
