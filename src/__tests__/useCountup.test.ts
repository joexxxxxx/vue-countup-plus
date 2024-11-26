import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { shallowRef } from 'vue-demi'
import { useCountup } from '../useCountup'

describe('useAnimate', () => {
  it('should be defined', () => {
    expect(useCountup).toBeDefined()
  })

  it('the test environment does not support animate', async () => {
    const wrapper = mount({
      template: '<p ref="el"></p>',
      setup() {
        const el = shallowRef<HTMLElement>()
        const animate = useCountup(el, 100)

        return { ...animate, el }
      },
    })
    const vm = wrapper.vm
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    expect(vm.$el.textContent).toBe('100')
    wrapper.unmount()
  })
})
