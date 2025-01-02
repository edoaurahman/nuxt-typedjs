import { useNuxtApp } from "#app"
import Typed, { type TypedOptions } from "typed.js"
export const useTypedJs = (): ((elementId: any, options: TypedOptions) => Typed) => {
    const { $typed } = useNuxtApp()
    return (elementId: any, options: TypedOptions) => new ($typed as typeof Typed)(elementId, options)
}