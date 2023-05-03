import axios from 'axios'
import findIndex from 'lodash/findIndex'
// import ColorThief from 'colorthief'
// import tinycolor2 from 'tinycolor2'

export default {
  async fetch() {
    if (this.asset.value === 'lottie') {
      for (let i = 0; i < this.urls.length; i++) {
        await this.getJson(i, this.urls[i])
      }
    }
    // if (this.asset.value === 'illustration' || this.asset.value === '3d') {
    //   if (!this.$route.query.bg_color || this.$route.query.bg_color === '') {
    //     await this.getBase64(this.urls[0])
    //   }
    // }
  },

  data() {
    return {
      assets: [
        { value: 'illustration', text: 'Illustrations' },
        { value: '3d', text: '3Ds' },
        { value: 'icon', text: 'Icons' },
        { value: 'lottie', text: 'Lottie Animations' }
      ],
      jsons: [],
      base64Data: null,
      bgColor: this.$route.query.bg_color || '#D6FCFE',
      titleColor: this.$route.query.title_color || '#000000',
      palette: []
      // colors: []
    }
  },

  // watch: {
  //   base64Data(value) {
  //     if (value) {
  //       if (!this.$route.query.bg_color || this.$route.query.bg_color === '') {
  //         this.getColor()
  //       }
  //     }
  //   }
  // },

  computed: {
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

    colors() {
      let cardColors = this.$route.query.cardColors

      if (!Array.isArray(cardColors)) {
        cardColors = Array(cardColors)
      }

      if (cardColors.length > 3) {
        cardColors = cardColors.slice(0, 3)
      }

      if (cardColors.length === 3) {
        return cardColors
      } else {
        return ['#9DA7FF', '#50D5FF', '#5AB5F7']
      }
    },

    asset() {
      const index = findIndex(this.assets, {
        value: this.$route.query.asset
      })

      return this.assets[index > -1 ? index : 0]
    }
  },

  methods: {
    // getColor() {
    //   const img = document.createElement('img')
    //   img.crossOrigin = 'Anonymous'
    //   img.setAttribute('src', this.base64Data)
    //   img.style.backgroundColor = '#000000'

    //   const colorThief = new ColorThief()

    //   img.addEventListener('load', () => {
    //     // RGBColor = colorThief.getColor(img, 10)
    //     this.palette = colorThief.getPalette(img, 10, 1)
    //     // console.log(Math.floor(Math.random() * (9 + 1))) // random number between 0-9
    //     this.colors = this.palette.map((color, index) => {
    //       const hslColor = tinycolor2(
    //         `rgb(${color[0]},${color[1]},${color[2]})`
    //       ).toHsl()

    //       // change shade of color
    //       // hslColor.s = hslColor.s / 2
    //       // hslColor.s = hslColor.s + (1 - hslColor.s) / 2
    //       // hslColor.l = hslColor.l + (1 - hslColor.l) / 2

    //       if(index === 0) {
    //         // change shade of color
    //       hslColor.s = hslColor.s / 2
    //       // hslColor.s = hslColor.s + (1 - hslColor.s) / 2
    //       hslColor.l = hslColor.l + (1 - hslColor.l) / 2
    //       }

    //       return tinycolor2(hslColor).toHexString()
    //     })

    //     this.bgColor = this.colors[0]
    //   })
    // },

    async getJson(index, url) {
      await axios.get(url).then((response) => {
        this.jsons[index] = JSON.stringify(response.data)
      })
    }

    // async getBase64(url) {
    //   await axios
    //     .get(url, {
    //       responseType: 'arraybuffer'
    //     })
    //     .then((response) => {
    //       this.base64Data = `data:image/png;base64, ${Buffer.from(
    //         response.data,
    //         'binary'
    //       ).toString('base64')}`
    //     })
    // }
  }
}
