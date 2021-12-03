import baseConfig, { fileName } from './rollup.config'

export default {
  ...baseConfig,
  output: {
    name: 'CaeeBuildComponents',
    file: fileName('umd'),
    format: 'umd',
    exports: 'named',
    globals: {
      vue: 'Vue',
      'lodash-es': '_',
    },
  },
}
