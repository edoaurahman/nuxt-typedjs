import type Typed from 'typed.js'
import type { TypedOptions } from 'typed.js'
import { useNuxtApp } from '#app'

export const useTypedJs = (): ((elementId: string, options: TypedOptions) => Typed) => {
  const { $typed } = useNuxtApp()
  return (elementId: string, options: TypedOptions) => new ($typed as typeof Typed)(elementId, options)
}
