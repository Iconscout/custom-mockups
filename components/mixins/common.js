import axios from 'axios'
import findIndex from 'lodash/findIndex'

export default {
  async fetch() {
    if (this.asset.value === 'lottie') {
      for (let i = 0; i < this.urls.length; i++) {
        await this.getJson(i, this.urls[i])
      }
    }
  },

  data() {
    return {
      assets: [
        { value: 'illustration', text: 'Illustrations' },
        { value: '3d', text: '3D Illustrations' },
        { value: 'icon', text: 'Icons' },
        { value: 'lottie', text: 'Lottie Animations' }
      ],
      jsons: []
    }
  },

  computed: {
    urls() {
      const queryUrls = this.$route.query.url

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

    formats() {
      let formats = this.$route.query.formats

      if (!Array.isArray(formats)) {
        formats = Array(formats)
      }

      if (formats.length > 3) {
        formats = formats.slice(0, 3)
      }

      return formats
    },

    asset() {
      const index = findIndex(this.assets, {
        value: this.$route.query.asset
      })

      return this.assets[index > -1 ? index : 0]
    }
  },

  methods: {
    async getJson(index, url) {
      await axios.get(url).then((response) => {
        this.jsons[index] = JSON.stringify(response.data)
      })
    }
  }
}
