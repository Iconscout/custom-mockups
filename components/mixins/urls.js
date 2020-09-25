export default {
  computed: {
    urls() {
      const queryUlrs = this.$route.query.url

      const divisor = ~~(this.maxMockups / queryUlrs.length)
      const remainder = this.maxMockups % queryUlrs.length

      let urls = []
      for (let i = 0; i < divisor; i++) {
        urls = [...urls, ...queryUlrs]
      }

      for (let j = 0; j < remainder; j++) {
        urls.push(queryUlrs[j])
      }
      return urls
    }
  }
}
