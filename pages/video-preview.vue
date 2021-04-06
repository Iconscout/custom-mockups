<template>
  <div class="box">
    <div class="watermark">
      <img src="@/assets/watermark/logo.svg" width="300" />
      <div class="username">{{ params.username }}</div>
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
.box {
  width: 364px;
  height: 129px;
}

.watermark {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(71, 71, 71, 0.06);
  padding: 32px;
}

.username {
  font-family: 'Averta';
  position: absolute;
  bottom: 30px;
  left: 117px;
  color: #474747;
  opacity: 0.4;
  font-size: 22px;
  line-height: 28px;
}
</style>
