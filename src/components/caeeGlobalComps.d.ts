declare module 'vue' {
  export interface GlobalComponents {
    'c-text': typeof import('./CText/index.vue')['default']
    'c-image': typeof import('./CImage/index.vue')['default']
    'render-jsx': typeof import('./RenderJsx/index.vue')['default']
  }
}

export {}
