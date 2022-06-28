import axios from 'axios'
import findIndex from 'lodash/findIndex'
import ColorThief from 'colorthief'
import tinycolor2 from 'tinycolor2'

export default {
  async fetch() {
    if (this.asset.value === 'lottie') {
      for (let i = 0; i < this.urls.length; i++) {
        await this.getJson(i, this.urls[i])
      }
    }
    if (this.asset.value === 'illustration' || this.asset.value === '3d') {
      if (!this.$route.query.bg_color || this.$route.query.bg_color === '') {
        await this.getBase64(this.urls[0])
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
      jsons: [],
      base64Data: null,
      bgColor: null,
      palette: []
    }
  },

  watch: {
    base64Data(value) {
      if (value) {
        if (!this.$route.query.bg_color || this.$route.query.bg_color === '') {
          this.getColor()
        }
      }
    }
  },

  computed: {
    packTitleColor() {
      return `#${this.$route.query.title_color}` || '#000000'
    },

    isExclusive() {
      return this.$route.query.exclusive === 'true' || false
    },

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
    getColor() {
      const img = document.createElement('img')
      img.crossOrigin = 'Anonymous'
      img.setAttribute('src', this.base64Data)
      img.style.backgroundColor = '#000000'

      const colorThief = new ColorThief()
      let RGBColor = null

      img.addEventListener('load', () => {
        // RGBColor = colorThief.getColor(img, 10)
        this.palette = colorThief.getPalette(img, 10, 1)
        // console.log(Math.floor(Math.random() * (9 + 1))) // random number between 0-9
        RGBColor = this.palette[9]

        const hslColor = tinycolor2(
          `rgb(${RGBColor[0]},${RGBColor[1]},${RGBColor[2]})`
        ).toHsl()

        // change shade of color
        hslColor.s = hslColor.s / 2
        hslColor.l = hslColor.l + (1 - hslColor.l) / 2

        this.bgColor = tinycolor2(hslColor).toHexString()
      })
    },

    async getJson(index, url) {
      await axios.get(url).then((response) => {
        this.jsons[index] = JSON.stringify(response.data)
      })
    },

    async getBase64(url) {
      await axios
        .get(url, {
          responseType: 'arraybuffer'
        })
        .then((response) => {
          this.base64Data = `data:image/png;base64, ${Buffer.from(
            response.data,
            'binary'
          ).toString('base64')}`
        })
    }
  }
}
