import type { Directive } from 'vue-demi'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
import { isVue2 } from 'vue-demi'

export interface CountupDirectiveBinding extends CountUpOptions {
  endVal: number
}

type DirectiveValue = CountupDirectiveBinding | number

type Keys = keyof CountupDirectiveBinding
const countUpMap = new WeakMap<HTMLElement, CountUp>()

type DirectiveHook<T = any> = (
  el: HTMLElement,
  binding: { value?: T, oldValue?: T }
) => void

function createCountUpInstance(el: HTMLElement, value: DirectiveValue) {
  const options = typeof value === 'number' ? { endVal: value } : value
  const instance = new CountUp(el, options.endVal, options)
  countUpMap.set(el, instance)
  instance.start()
  return instance
}

const createInstance: DirectiveHook<DirectiveValue> = (el, binding) => {
  if (binding.value !== 0 && !binding.value) {
    throw new Error('endVal is required')
  }
  createCountUpInstance(el, binding.value)
}

const updateInstance: DirectiveHook<DirectiveValue> = (el, binding) => {
  if (!binding.value || !binding.oldValue) {
    removeInstance(el)
    return
  }

  const value = typeof binding.value === 'number' ? { endVal: binding.value } : binding.value
  const oldValue = typeof binding.oldValue === 'number' ? { endVal: binding.oldValue } : binding.oldValue

  const keys = Object.keys(value) as Keys[]
  const valueChanged = value.endVal !== oldValue.endVal

  if (typeof binding.value !== 'number') {
    const optionsChanged = keys.some((key) => {
      if (key === 'endVal')
        return false
      return value[key] !== oldValue[key]
    })
    if (optionsChanged) {
      createCountUpInstance(el, binding.value)
      return
    }
  }

  const instance = countUpMap.get(el)

  if (!instance) {
    createCountUpInstance(el, binding.value)
    return
  }

  if (valueChanged) {
    instance.update(value.endVal)
  }
}

function removeInstance(el: HTMLElement) {
  countUpMap.delete(el)
}

export const vCountup: Directive<HTMLElement, DirectiveValue> = isVue2
  ? ({
      bind: createInstance,
      update: updateInstance,
      unbind: removeInstance,
    } as Directive<HTMLElement, DirectiveValue>)
  : ({
      mounted: createInstance,
      updated: updateInstance,
      unmounted: removeInstance,
    } as Directive<HTMLElement, DirectiveValue>)
