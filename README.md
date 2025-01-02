<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

# Nuxt Typed.js

<img src="https://raw.githubusercontent.com/mattboldt/typed.js/master/logo-cropped.png" width="450px" title="Typed.js" />

### [Live Demo](http://www.mattboldt.com/demos/typed-js/) | [View All Demos](http://mattboldt.github.io/typed.js/) | [View Full Docs](http://mattboldt.github.io/typed.js/docs) | [mattboldt.com](http://www.mattboldt.com)

Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

---


- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/edoaurahman/nuxt-typedjs?file=playground%2Fapp.vue)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-typedjs
```

That's it! You can now use Nuxt Typed.js in your Nuxt app ✨

## Example

```vue
<template>
  <div>
    <span id="element" />
  </div>
</template>

<script setup lang="ts">
const typed = useTypedJs()
onMounted(() => {
  typed('#element', {
    strings: ['Hello', 'World'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  })
})
</script>
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

## Original Sources

- [Typed.js](https://github.com/mattboldt/typed.js)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-typedjs/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-typedjs

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-typedjs.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-typedjs

[license-src]: https://img.shields.io/npm/l/nuxt-typedjs.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-typedjs

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
