import { App } from 'vue'
import Ctext from './components/CText'
import Cimage from './components/Cimage'
import RenderJsx from './components/RenderJsx'

const componentList = [Ctext, Cimage, RenderJsx]

const install = (app: App) => {
  componentList.forEach((comp) => {
    app.component(comp.name, comp)
  })
}

export { install, Ctext, Cimage, RenderJsx }

export default { install }

export {
  AllComponentsProps,
  transformObjToProps,
  CommonComponentProps,
  commonDefaultProps,
} from './components/types'

export {
  ImageComponentProps,
  imageDefaultObj,
  imageDefaultProps,
  imageStyleProps,
} from './components/CImage/types'

export {
  TextComponentProps,
  textDefaultObj,
  textDefaultProps,
  textStyleProps,
} from './components/CText/types'
