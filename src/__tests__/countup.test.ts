import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CountUp from '../countup.vue'
import { nextTick } from 'vue'

// 模拟 countup.js
vi.mock('countup.js', () => ({
  CountUp: vi.fn().mockImplementation(() => ({
    start: vi.fn().mockResolvedValue(undefined),
    reset: vi.fn(),
    update: vi.fn(),
    pauseResume: vi.fn(),
    printValue: vi.fn()
  }))
}))

describe('CountUp Component', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    // 每个测试前重置组件
    wrapper = mount(CountUp, {
      props: {
        endVal: 0,
        options: {}
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('initializes with default props', () => {
    const wrapper = mount(CountUp)
    expect(wrapper.props('endVal')).toBe(0)
    expect(wrapper.props('options')).toEqual({})
  })

  it('accepts custom endVal', async () => {
    const wrapper = mount(CountUp, {
      props: {
        endVal: 100
      }
    })
    expect(wrapper.props('endVal')).toBe(100)
  })

  it('accepts custom options', async () => {
    const options = {
      duration: 2,
      decimal: 2
    }
    const wrapper = mount(CountUp, {
      props: {
        endVal: 0,
        options
      }
    })
    expect(wrapper.props('options')).toEqual(options)
  })

  it('exposes required methods', () => {
    expect(wrapper.vm.start).toBeDefined()
    expect(wrapper.vm.reset).toBeDefined()
    expect(wrapper.vm.pauseResume).toBeDefined()
    expect(wrapper.vm.printValue).toBeDefined()
  })

  it('updates when endVal changes', async () => {
    await wrapper.setProps({ endVal: 100 })
    await nextTick()
    expect(wrapper.props('endVal')).toBe(100)
  })


})
