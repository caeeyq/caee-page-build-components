import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'

const fileName = (type) => `dist/${name.split('/')[1]}.${type}.js`

const tsconfigOverride = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts'],
}

export default {
  input: 'src/index.ts',
  plugins: [
    terser(),
    nodeResolve(),
    vue(),
    scss({ output: 'dist/style/caee.css' }),
    typescript({ tsconfigOverride }),
  ],
  external: ['vue', 'lodash-es'],
}

export { fileName, name }
