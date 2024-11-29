---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "vue-countup-plus"
  text: "A Vue 3 component that wraps CountUp.js to create animated number transitions"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

# Vue CountUp Plus

A Vue 3 component that wraps CountUp.js to create animated number transitions.

## Component Demo

<script setup>
import BasicDemo from './components/BasicDemo.vue'
import HookDemo from './components/HookDemo.vue'
</script>

<BasicDemo />

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

## Installation

```bash
# npm
npm install vue-countup-plus

# yarn
yarn add vue-countup-plus

# pnpm
pnpm add vue-countup-plus
```

## Usage

### Using the Component

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

### Using the Hook

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
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| endVal | `number` | `0` | The value you want to count up to |
| options | `CountUpOptions` | `{}` | CountUp.js options |

### CountUpOptions

The `options` prop accepts all options from CountUp.js:

```ts
interface CountUpOptions {
  startVal?: number // number to start at (0)
  decimalPlaces?: number // number of decimal places (0)
  duration?: number // animation duration in seconds (2)
  useGrouping?: boolean // example: 1,000 vs 1000 (true)
  useEasing?: boolean // ease animation (true)
  smartEasingThreshold?: number // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number // amount to be eased for numbers above threshold (333)
  separator?: string // grouping separator (',')
  decimal?: string // decimal ('.')
  prefix?: string // text before the number ('') 
  suffix?: string // text after the number ('')
  enableScrollSpy?: boolean // start animation when target is in view (false)
  scrollSpyDelay?: number // delay (ms) after target comes into view (0)
  scrollSpyOnce?: boolean // run only once (false)
}
```

## Methods

Both the component and hook expose these methods:

| Method | Description |
|--------|-------------|
| start | Start the animation |
| update | Update the end value and animate to it |
| reset | Reset to the initial state |
| pauseResume | Toggle pause/resume of the animation |
| printValue | Immediately print the target value |

### Component Example

```vue
<script setup>
import { ref } from 'vue'
import { CountUp } from 'vue-countup-plus'

const countUpRef = ref()

const updateValue = () => {
  countUpRef.value?.update(Math.random() * 1000)
}
</script>

<template>
  <CountUp ref="countUpRef" :end-val="100" />
  <button @click="updateValue">Update</button>
</template>
```

### Hook Example

```vue
<script setup>
import { ref } from 'vue'
import { useCountup } from 'vue-countup-plus'

const el = ref<HTMLElement>()
const { update } = useCountup(el, 100)

const updateValue = () => {
  update(Math.random() * 1000)
}
</script>

<template>
  <span ref="el">0</span>
  <button @click="updateValue">Update</button>
</template>
```

## License

MIT
