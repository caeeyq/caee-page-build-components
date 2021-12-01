import { App } from 'vue'
import Ctext from '@/components/CText'
import Cimage from '@/components/Cimage'
import RenderJsx from '@/components/RenderJsx'

const componentList = [Ctext, Cimage, RenderJsx]

const install = (app: App) => {
  componentList.forEach((comp) => {
    app.component(comp.name, comp)
  })
}

export { install, Ctext, Cimage, RenderJsx }

export default { install }
