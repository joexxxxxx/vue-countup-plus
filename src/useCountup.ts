import type { CountUpOptions } from 'countup.js'
import type { MaybeRef, Ref } from 'vue'
import { CountUp } from 'countup.js'
import { onMounted, onScopeDispose, toRef, watch, nextTick, shallowRef } from 'vue'

export interface UseCountupReturn {
  start: () => Promise<void>
  reset: () => void
  update: (newEndVal: number) => Promise<void>
  pauseResume: () => void
  countUpInstance: Ref<CountUp | undefined>
}

export function useCountup(
  target: Ref<HTMLElement | undefined>,
  endVal: MaybeRef<number>,
  options: MaybeRef<CountUpOptions> = {}
): UseCountupReturn {
  const endValRef = toRef(endVal)
  const optionsRef = toRef(options)

  const countUpInstance = shallowRef<CountUp | undefined>(undefined)

  function createInstance(): CountUp | undefined {
    if (!target.value) return undefined
    
    try {
      return new CountUp(target.value, endValRef.value, {
        enableScrollSpy: false,
        scrollSpyOnce: false,
        ...optionsRef.value,
      })
    } catch (error) {
      console.error('CountUp instance creation failed:', error)
      return undefined
    }
  }

  async function ensureInstance(): Promise<CountUp | undefined> {
    if (countUpInstance.value) return countUpInstance.value
    await nextTick()
    countUpInstance.value = createInstance()
    return countUpInstance.value
  }

  async function recreateAndStart() {
    countUpInstance.value = undefined // 清除旧实例
    const instance = await ensureInstance()
    if (instance) instance.start()
  }

  // 监听目标元素变化和配置变化，这两种情况都需要重新创建实例
  watch([target, optionsRef], recreateAndStart, { deep: true })

  // 监听结束值变化，只需要更新值
  watch(endValRef, async (newEndVal) => {
    const instance = await ensureInstance()
    if (instance) instance.update(newEndVal)
  })

  // 组件挂载时创建实例
  onMounted(recreateAndStart)

  // 组件销毁时清理实例
  onScopeDispose(() => {
    countUpInstance.value = undefined
  })

  return {
    async start() {
      const instance = await ensureInstance()
      if (instance) instance.start()
    },
    reset() {
      if (countUpInstance.value) {
        countUpInstance.value.reset()
      }
    },
    async update(newEndVal: number) {
      const instance = await ensureInstance()
      if (instance) instance.update(newEndVal)
    },
    pauseResume() {
      if (countUpInstance.value) {
        countUpInstance.value.pauseResume()
      }
    },
    countUpInstance
  }
}
