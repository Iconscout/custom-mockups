<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <h1 class="title">Zapata</h1>
        <p class="subtitle">Simple Look Line Illustration</p>
      </div>
      <div class="firstColumn">
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-examining-the-patient-medical-report-2120244-1784705.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-examining-the-patient-medical-report-2120244-1784705.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-examining-the-patient-medical-report-2120244-1784705.png"
          />
        </div>
      </div>
      <div class="secondColumn">
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-examining-the-patient-medical-report-2120244-1784705.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-examining-the-patient-medical-report-2120244-1784705.png"
          />
        </div>
        <div class="wrapper">
          <img
            class="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-examining-the-patient-medical-report-2120244-1784705.png"
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
  background-image: url('~assets/images/pattern-background.png');
  background-size: contain;
  overflow: hidden;
}

.main {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.content {
  padding: 60px 0 60px 60px;
  width: 50%;
}

.title {
  margin-top: 30px;
  font-weight: bold;
  font-size: 58px;
  line-height: 116.4%;
  letter-spacing: 0.06em;
  color: #7352ff;
}

.subtitle {
  padding: 13px 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: 0.05em;
  color: #626466;
  width: 183px;
}

.firstColumn {
  margin-right: 10px;
  margin-top: 15px;
  transform: rotate(2.27deg);
}

.secondColumn {
  margin: -20px -10px 0 0;
  transform: rotate(2.27deg);
}

.wrapper {
  width: 220px;
  height: 154px;
  margin: 10px 0;
  object-fit: contain;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
