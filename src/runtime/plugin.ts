import Typed from 'typed.js'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('typed', Typed)
})
