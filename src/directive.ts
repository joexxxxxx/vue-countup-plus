import type { CountUpOptions } from 'countup.js'
import type { Directive, DirectiveBinding } from 'vue'
import { CountUp } from 'countup.js'

export interface CountupDirectiveBinding {
  value: number
  options?: CountUpOptions
}

const countUpMap = new WeakMap<HTMLElement, CountUp>()

export const vCountup: Directive<HTMLElement, CountupDirectiveBinding> = {
  mounted(el, binding: DirectiveBinding<CountupDirectiveBinding>) {
    const value = binding.value?.value ?? 0
    const options = binding.value?.options ?? {}
    const instance = new CountUp(el, value, {
      ...options,
    })
    countUpMap.set(el, instance)
    instance.start()
  },
  updated(el, binding: DirectiveBinding<CountupDirectiveBinding>) {
    const value = binding.value?.value ?? 0
    const options = binding.value?.options ?? {}
    const oldValue = binding.oldValue?.value ?? 0

    if (value !== oldValue) {
      let instance = countUpMap.get(el)
      if (instance) {
        instance = new CountUp(el, value, {
          ...options,
        })
        instance.start()
        countUpMap.set(el, instance)
      } else {
        instance!.update(value)
      }
    }
  },
  unmounted(el) {
    countUpMap.delete(el)
  },
}
