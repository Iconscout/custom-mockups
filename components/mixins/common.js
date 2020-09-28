import findIndex from 'lodash/findIndex'

export default {
  data() {
    return {
      assets: [
        { value: 'illustration', text: 'Illustration' },
        { value: '3d', text: '3D illutration' }
      ]
    }
  },

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
    },

    asset() {
      const index = findIndex(this.assets, {
        value: this.$route.query.asset
      })

      return this.assets[index > -1 ? index : 0]
    }
  }
}
