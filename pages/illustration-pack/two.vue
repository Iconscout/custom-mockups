<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">Tumbaso</h1>
        <p class="subtitle">Buisness Illustration</p>
        <p class="desc">20 Creative scence Buisness illustrations. Ready to use for presentation. Website Mobile and all
          needs.</p>
      </div>
      <div class="wrapper">
        <div class="previewBg"></div>
          <div class="preview1">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-in-office-on-desk-955432.png"
              class="img1" />
          </div>
          <div class="preview2">
            <img src="https://cdni.iconscout.com/illustration/free/thumb/guy-doing-presentation-958572.png?w=360&h=240"
              class="img2" />
          </div>
          <div class="preview3">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-secure-online-payment-using-laptop-card-and-smartphones-1917517-1625529.png?w=360&h=240"
              class="img3" />
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
body {
  font-family: 'Source Sans Pro', sans-serif;
}

.container {
  width: 720px;
  height: 480px;
  background: #FAFCFF;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 0 0 0 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-weight: 600;
  font-size: 41px;
  line-height: 52px;
  letter-spacing: 0.05em;
}

.subtitle {
  padding: 6px 0 13px 0;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.08em;

  color: #3C3C3D;
}

.desc {
  padding: 0 40px 0 0;
  font-size: 9px;
  line-height: 190%;
  letter-spacing: 0.05em;
  color: #9F9FAF;
  width: 190px;
}

.wrapper {
  position: relative;
}

.previewBg {
  height: 419px;
  width: 390px;
  border-bottom-left-radius: 30px;
  background: #BCE2FF;
}

.preview1 {
  width: 360px;
  height: 261px;
  object-fit: contain;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 5;
  right: 0;
  box-shadow: -10px 8px 10px rgba(146, 199, 241, 0.8);
}

.preview2 {
  width: 280px;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  top: 150px;
  z-index: 10;
  right: 145px;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
}

.preview3 {
  width: 227px;
  height: 163px;
  object-fit: contain;
  overflow: hidden;
  z-index: 15;
  position: absolute;
  top: 300px;
  right: 20px;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.img1 {
  width: 100%;
  height: 100%;
}

.img2 {
  width: 100%;
  height: 100%;
  border-radius: 18px;
}

.img3 {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
