<template>
  <div class="wrapper">
    <img :src="params.url" width="378" height="378" />
    <div class="box">
      <div class="watremark">
        <img src="@/assets/watermark/logo.svg" width="150" />
        <div class="username">@{{ params.username }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    params() {
      return this.$route.query
    }
  }
}
</script>

<style>
.wrapper {
  position: relative;
  padding: 61px;
  width: 500px;
  height: 500px;
  background: #ffffff;
}

.box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  z-index: 10;
}

.watremark {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(71, 71, 71, 0.06);
  padding: 16px;
}

.username {
  position: absolute;
  bottom: 16px;
  left: 59px;
  color: #474747;
  opacity: 0.4;
  font-size: 8px;
}
</style>
