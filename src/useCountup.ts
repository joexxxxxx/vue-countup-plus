import type { CountUpOptions } from 'countup.js'
import type { MaybeRef, Ref } from 'vue-demi'
import { CountUp } from 'countup.js'
import { onScopeDispose, toRef, watch } from 'vue-demi'

export interface UseCountupReturn {
  start: () => void
  reset: () => void
  update: (newEndVal: number) => void
  pauseResume: () => void
  printValue: (n: number) => void
}

export function useCountup(target: Ref<HTMLElement | undefined>, endVal: MaybeRef<number>, options: MaybeRef<CountUpOptions> = {}): UseCountupReturn {
  let countUp: CountUp | undefined

  const endValRef = toRef(endVal)
  const optionsRef = toRef(options)

  watch(target, () => {
    createCountUp()
  })

  watch(() => optionsRef.value, () => {
    createCountUp()
  }, {
    deep: true,
  })

  function createCountUp() {
    pauseResume()
    countUp = undefined
    if (target.value) {
      countUp = new CountUp(target.value!, endValRef.value, optionsRef.value)
      countUp.start()
    }
    else {
      throw new Error('target is required')
    }
  }

  watch(() => endValRef.value, (newEndVal) => {
    countUp?.update(newEndVal)
  })

  function printValue(n: number) {
    countUp?.printValue(n)
  }
  function start() {
    countUp?.start()
  }
  function reset() {
    countUp?.reset()
  }
  function update(newEndVal: number) {
    countUp?.update(newEndVal)
  }
  function pauseResume() {
    countUp?.pauseResume()
  }

  onScopeDispose(() => {
    countUp = undefined
  })
  return {
    start,
    reset,
    update,
    pauseResume,
    printValue,
  }
}
