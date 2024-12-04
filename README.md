# Vue CountUp Plus

[![npm version](https://badge.fury.io/js/vue-countup-plus.svg)](https://badge.fury.io/js/vue-countup-plus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Vue component library that wraps CountUp.js to create animated number transitions. Supports Vue 2 & 3, provides component, composable, and directive options, and is written in TypeScript.

## ✨ Features

- 🎯 Multiple integration options: Component, Composable, and Directive
- 💪 Written in TypeScript with full type support
- 🔄 Vue 2 and Vue 3 compatibility
- 🎨 Highly customizable animation options
- 📦 Lightweight with minimal dependencies
- 🌐 Multiple bundle formats (UMD, ESM, IIFE)
- 🛠️ Easy to use API with smart defaults

## 📦 Installation

```bash
# npm
npm install vue-countup-plus

# yarn
yarn add vue-countup-plus

# pnpm
pnpm add vue-countup-plus
```

## 🚀 Usage

### Component Usage

The simplest way to use vue-countup-plus:

```vue
<script setup>
import { CountUp } from 'vue-countup-plus'

const options = {
  duration: 2,
  decimalPlaces: 0,
}
</script>

<template>
  <CountUp :end-val="2024" :options="options" />
</template>
```

### Directive Usage

Two ways to use the directive:

#### Simple Usage
```vue
<script setup>
import { vCountup } from 'vue-countup-plus'
</script>

<template>
  <span v-countup="2024">0</span>
</template>
```

#### Advanced Usage with Options
```vue
<script setup>
import { computed, ref } from 'vue'
import { vCountup } from 'vue-countup-plus'

const endVal = ref(2024)
const countupBinding = computed(() => ({
  endVal: endVal.value,
  duration: 2,
  decimalPlaces: 0,
  useGrouping: true,
  prefix: '$',
  suffix: ' USD'
}))
</script>

<template>
  <span v-countup="countupBinding">0</span>
</template>
```

### Composable Usage

For more control over the animation:

```vue
<script setup>
import { onMounted, ref } from 'vue'
import { useCountup } from 'vue-countup-plus'

const el = ref()
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
  <button @click="start">
    Start
  </button>
  <button @click="update(Math.random() * 1000)">
    Update
  </button>
  <button @click="reset">
    Reset
  </button>
  <button @click="pauseResume">
    Pause/Resume
  </button>
</template>
```

## ⚙️ Configuration Options

All integration methods support the following CountUp.js options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| startVal | number | 0 | The value to start from |
| duration | number | 2 | Animation duration in seconds |
| decimalPlaces | number | 0 | Number of decimal places |
| useGrouping | boolean | true | Use number grouping (i.e. 1,000 vs 1000) |
| useEasing | boolean | true | Use easing animation |
| smartEasingThreshold | number | 999 | Threshold for smart easing |
| smartEasingAmount | number | 333 | Amount for smart easing |
| separator | string | ',' | Grouping separator |
| decimal | string | '.' | Decimal separator |
| prefix | string | '' | Text before the number |
| suffix | string | '' | Text after the number |

## 📄 License

[MIT](./LICENSE) License 2024
