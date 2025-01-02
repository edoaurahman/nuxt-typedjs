import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the typed.js element', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<span id="element"></span>')
  })

  it('contains typed.js strings', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<p>Typed.js is a <strong>JavaScript</strong> library.</p>')
    expect(html).toContain('<p>It <em>types</em> out sentences.</p>')
  })
})
