# Vue CountUp Plus

[![npm version](https://badge.fury.io/js/vue-countup-plus.svg)](https://badge.fury.io/js/vue-countup-plus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Vue 3 component that wraps CountUp.js to create animated number transitions. Simple to use, highly customizable, and written in TypeScript.

## ✨ Features

- 🎯 Easy to use Vue 3 component, composable, and directive
- 💪 Written in TypeScript with full type support
- 🎨 Highly customizable animation options
- 📦 Lightweight with zero dependencies
- 🔧 Support for component, composition API, and directive
- 🌐 UMD, ESM, and IIFE bundle formats

## 📦 Installation

```bash
# npm
npm install countup.js vue-countup-plus --save

# yarn
yarn add countup.js vue-countup-plus --save

# pnpm
pnpm add countup.js vue-countup-plus --save
```

## 🚀 Quick Start

### Component Usage

```vue
<template>
  <CountUp :end-val="2024" />
</template>

<script setup>
import { CountUp } from 'vue-countup-plus'
</script>
```

### Composable Usage

```vue
<template>
  <span ref="countupRef">0</span>
</template>

<script setup>
import { ref } from 'vue'
import { useCountup } from 'vue-countup-plus'

const countupRef = ref(null)

useCountup(countupRef, {
  endVal: 2024,
  duration: 2.5,
})
</script>
```

### Directive Usage

```vue
<template>
  <span v-countup="{ value: 2024, options: { duration: 2.5 } }">0</span>
</template>

<script setup>
import { vCountup } from 'vue-countup-plus'
</script>
```

## ⚙️ Props & Options

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| endVal | number | 0 | The value to count to |
| options | CountUpOptions | `{}` | CountUp.js configuration options |

### Directive Value

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| value | number | 0 | The value to count to |
| options | CountUpOptions | `{}` | CountUp.js configuration options |

### CountUpOptions Interface

```typescript
interface CountUpOptions {
  startVal?: number;         // number to start at (0)
  decimalPlaces?: number;    // number of decimal places (0)
  duration?: number;         // animation duration in seconds (2)
  useGrouping?: boolean;     // example: 1,000 vs 1000 (true)
  useEasing?: boolean;       // ease animation (true)
  smartEasingThreshold?: number; // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number;    // amount to be eased for numbers above threshold (333)
  separator?: string;        // grouping separator (',')
  decimal?: string;          // decimal ('.')
  prefix?: string;          // text before the number ('')
  suffix?: string;          // text after the number ('')
  enableScrollSpy?: boolean; // start animation when target is in view (false)
  scrollSpyOnce?: boolean;   // run animation only once when target is in view (false)
  scrollSpyDelay?: number;   // delay (ms) after target comes into view (0)
}
```

## 🎨 Advanced Configuration

### Component Example

```vue
<template>
  <CountUp
    :end-val="1000"
    :options="{
      startVal: 0,
      decimalPlaces: 2,
      duration: 2.5,
      useGrouping: true,
      useEasing: true,
      prefix: '$',
      suffix: ' USD',
      separator: ',',
      decimal: '.'
    }"
  />
</template>

<script setup>
import { CountUp } from 'vue-countup-plus'
</script>
```

### Directive Example

```vue
<template>
  <span v-countup="{
    value: 1000,
    options: {
      startVal: 0,
      decimalPlaces: 2,
      duration: 2.5,
      useGrouping: true,
      useEasing: true,
      prefix: '$',
      suffix: ' USD',
      separator: ',',
      decimal: '.'
    }
  }">0</span>
</template>

<script setup>
import { vCountup } from 'vue-countup-plus'
</script>
```

## 🎮 Methods

The component exposes the following methods:

- `start()`: Start the animation
- `reset()`: Reset to initial state
- `pauseResume()`: Toggle between pause/resume
- `printValue()`: Print the current value

## 📚 Documentation

For more detailed documentation and examples, please visit our [documentation site](https://your-docs-site.com).

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Build documentation
pnpm docs:build
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/vue-countup-plus/issues).

## 📄 License

[MIT](./LICENSE) License 2024
