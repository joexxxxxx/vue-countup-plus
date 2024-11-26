# vue-countup-plus

A versatile number animation counter component that supports both Vue 2 and Vue 3. Built on top of countup.js and powered by vue-demi for seamless Vue version compatibility.

[![NPM Version](https://img.shields.io/npm/v/vue-countup-plus)](https://www.npmjs.com/package/vue-countup-plus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🔄 Compatible with both Vue 2 and Vue 3
- 💪 Full TypeScript support
- 🚀 Smooth number animations powered by countup.js
- 🎮 Rich control methods (start, pause, reset, etc.)
- ⚙️ Customizable animation options
- 🔥 Reactive updates support
- 📦 Zero-config usage in Vue 2/3 projects

## 🚀 Installation

```bash
# npm
npm install vue-countup-plus

# pnpm
pnpm add vue-countup-plus

# yarn
yarn add vue-countup-plus
```

### Additional Dependencies

#### For Vue 2 Projects
```bash
npm install @vue/composition-api
```

#### For Vue 3 Projects
No additional dependencies required.

## 📖 Usage

### Vue 3 (Script Setup)
```vue
<script setup>
import { CountUp } from 'vue-countup-plus'
</script>

<template>
  <CountUp :end-val="2024" />
</template>
```

### Vue 2
```vue
<template>
  <count-up :end-val="2024" />
</template>

<script>
import { CountUp } from 'vue-countup-plus'

export default {
  components: {
    CountUp
  }
}
</script>
```

### Using Composition API (Vue 2 & 3)
```vue
<script setup>
import { useCountup } from 'vue-countup-plus'
import { ref } from 'vue' // or '@vue/composition-api' in Vue 2

const target = ref()
const { start, reset, update, pauseResume } = useCountup(target, 2024, {
  duration: 2,
  decimal: 2
})
</script>

<template>
  <span ref="target" />
</template>
```

## 🔧 API Reference

### Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| endVal | number | The target number to count to | Required |
| options | Object | Configuration options for countup.js | {} |

### Methods

| Method | Description |
|--------|-------------|
| start() | Start the animation |
| reset() | Reset to initial state |
| update(newEndVal) | Update the target value |
| pauseResume() | Toggle pause/resume state |
| printValue() | Print current value |

### Options

The `options` prop accepts all [countup.js options](https://github.com/inorganik/countUp.js#options), including:

- `duration`: Animation duration in seconds
- `decimal`: Number of decimal places
- `prefix`: String to prepend to the number
- `suffix`: String to append to the number
- `separator`: Thousand separator character
- `decimals`: Number of decimal places to show
- `enableScrollSpy`: Enable scroll-triggered animations
- `scrollSpyOnce`: Trigger scroll animation only once

## 🛠️ Tech Stack

- Vue 2/3 compatibility via vue-demi
- TypeScript
- countup.js
- Vite
- Vitest (Unit Testing)

## 📝 License

[MIT](./LICENSE) License  2024 [vue-countup-plus](https://github.com/joexxxxxx/vue-countup-plus)

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check our [issues page](https://github.com/joexxxxxx/vue-countup-plus/issues).

## 🌟 Show your support

Give a ⭐️ if this project helped you!