# Vue CountUp Plus Examples

<script setup>
import BasicDemo from './components/BasicDemo.vue'
import HookDemo from './components/HookDemo.vue'
import DirectiveDemo from './components/DirectiveDemo.vue'
</script>

## Installation

```bash
# npm
npm install vue-countup-plus

# yarn
yarn add vue-countup-plus

# pnpm
pnpm add vue-countup-plus


## Component Demo

The simplest way to use vue-countup-plus is with the `CountUp` component:
```

<BasicDemo />

```vue
<script setup>
import { CountUp } from 'vue-countup-plus'

const endVal = ref(2024)
const options = {
  duration: 2,
  decimalPlaces: 0,
}
</script>

<template>
  <CountUp :end-val="endVal" :options="options" />
</template>
```

## Hook Demo

If you prefer more control over the DOM element and animation, you can use the `useCountup` composable:

<HookDemo />

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { useCountup } from 'vue-countup-plus'

const el = ref<HTMLElement>()
const endVal = ref(2024)

const { start, update, reset, pauseResume } = useCountup(el, endVal, {
  duration: 2,
  decimalPlaces: 0,
})

onMounted(() => {
  start()
})
</script>

<template>
  <span ref="el">0</span>
  <button @click="start">Start</button>
  <button @click="update(Math.random() * 1000)">Update</button>
  <button @click="reset">Reset</button>
  <button @click="pauseResume">Pause/Resume</button>
</template>
```

## Directive Demo

For a simpler way to add counting animations, you can use the `v-countup` directive:

<DirectiveDemo />

```vue
<script setup>
import { ref } from 'vue'
import { vCountup } from 'vue-countup-plus'

const endVal = ref(2024)
const options = ref({
  duration: 2,
  decimalPlaces: 0,
})

const updateValue = () => {
  endVal.value = Math.floor(Math.random() * 10000)
}
</script>

<template>
  <span v-countup="{ value: endVal, options }">0</span>
  <button @click="updateValue">Update Number</button>
</template>
```
