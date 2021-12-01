import { App } from 'vue'
import CText from './index.vue'

CText.install = (app: App) => {
  app.component(CText.name, CText)
}

export default CText
