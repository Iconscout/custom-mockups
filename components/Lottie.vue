<template>
  <lottie-player
    ref="lavContainer"
    v-bind="$attrs"
    :style="style"
    :autoplay="!$attrs.hasOwnProperty('hover')"
  ></lottie-player>
</template>

<script>
import '@lottiefiles/lottie-player'

export default {
  props: {
    animationName: {
      type: String,
      default: 'receipt'
    },
    url: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    observe: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      observer: null,
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },

  mounted() {
    // If IntersectionObserver exists then lazy load
    if (this.observe && 'IntersectionObserver' in window) {
      this.observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.onShow()
          this.observer.disconnect()
        }
      })

      this.observer.observe(this.$el)
    } else {
      this.onShow()
    }
  },
  destroyed() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },

  methods: {
    onShow() {
      const self = this

      import(
        /* webpackChunkName: "lottie-player" */ '@lottiefiles/lottie-player'
      ).then((r) => {
        if (this.url) {
          self.$refs.lavContainer.load(this.url)
        }
      })
    }
  }
}
</script>
