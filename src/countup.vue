<script setup lang="ts">
import type { CountUpOptions } from 'countup.js'
import { watch, useTemplateRef } from 'vue-demi'
import { useCountup } from './useCountup'

const props = withDefaults(defineProps<{
  endVal?: number
  options?: CountUpOptions
}>(), {
  endVal: 0,
  options: () => ({

  }),
})

const target = useTemplateRef<HTMLElement>('target')

const { start, reset, update, pauseResume, countUpInstance } = useCountup(target, props.endVal, props.options)

watch(() => props.endVal, async (newEndVal) => {
  await update(newEndVal)
})

defineExpose({
  start,
  reset,
  update,
  pauseResume,
  countUpInstance
})
</script>

<template>
  <span ref="target" />
</template>
