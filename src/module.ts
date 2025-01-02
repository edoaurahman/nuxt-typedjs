import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-typedjs',
    configKey: 'typedjs',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addImportsDir(resolver.resolve('./runtime/composables'))
  },
})
