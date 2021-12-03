import baseConfig, { name, fileName } from './rollup.config'

export default {
  ...baseConfig,
  output: {
    name,
    file: fileName('esm'),
    format: 'es',
  },
}
