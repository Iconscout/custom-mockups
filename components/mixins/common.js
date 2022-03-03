import findIndex from 'lodash/findIndex'

export default {
  data() {
    return {
      assets: [
        { value: 'illustration', text: 'Illustrations' },
        { value: '3d', text: '3D Illustrations' },
        { value: 'icon', text: 'Icons' },
        { value: 'lottie', text: 'Lottie Animations' }
      ]
    }
  },

  computed: {
    urls() {
      let queryUrls = this.$route.query.url

      if (!Array.isArray(queryUrls)) {
        queryUrls = Array(queryUrls)
      }

      const divisor = ~~(this.maxMockups / queryUrls.length)
      const remainder = this.maxMockups % queryUrls.length

      let urls = []
      for (let i = 0; i < divisor; i++) {
        urls = [...urls, ...queryUrls]
      }

      for (let j = 0; j < remainder; j++) {
        urls.push(queryUrls[j])
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
