import { App, defineComponent, PropType, VNode } from 'vue'
const RenderJsx = defineComponent({
  name: 'render-jsx',
  props: {
    content: {
      type: [Object, String, Boolean, Number] as PropType<
        VNode | string | boolean | number
      >,
      required: true,
    },
  },
  setup(props) {
    return () => props.content
  },
})

RenderJsx.install = (app: App) => {
  app.component(RenderJsx.name, RenderJsx)
}

export default RenderJsx
