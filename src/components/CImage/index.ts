import { App } from 'vue'
import CImage from './index.vue'

CImage.install = (app: App) => {
  app.component(CImage.name, CImage)
}

export default CImage
