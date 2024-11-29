# vue-countup-plus

## 项目简介
vue-countup-plus 是一个同时支持 Vue 2 和 Vue 3 的数字动画计数组件。它提供了一个简单而强大的方式来实现数字的动态变化效果。该组件基于 countup.js 封装，并通过 vue-demi 实现了对 Vue 2 和 Vue 3 的无缝兼容。

## 主要特性
- ✨ 同时支持 Vue 2 和 Vue 3
- 💪 完整的 TypeScript 支持
- 🚀 基于 countup.js 实现平滑的数字动画
- 🎮 提供多种控制方法（开始、暂停、重置等）
- ⚙️ 可自定义动画选项
- 🔄 支持响应式更新
- 🎯 零配置即可在 Vue 2/3 项目中使用

## 技术栈
- Vue 2/3 兼容 (通过 vue-demi)
- TypeScript
- countup.js
- Vite
- Vitest (单元测试)

## 安装

### 1. 安装核心包
```bash
# npm
npm install vue-countup-plus countup.js

# pnpm
pnpm add vue-countup-plus countup.js

# yarn
yarn add vue-countup-plus countup.js
```

### 2. 安装对应版本依赖
#### Vue 2 项目
```bash
npm install @vue/composition-api
```

#### Vue 3 项目
无需额外安装，开箱即用。

## 使用方法

### Vue 2 项目
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

### Vue 3 项目
```vue
<script setup>
import { CountUp } from 'vue-countup-plus'
</script>

<template>
  <CountUp :end-val="2024" />
</template>
```

## API

### Props
- `endVal`: 结束值（数字）
- `options`: countup.js 配置选项

### 方法
- `start()`: 开始动画
- `reset()`: 重置动画
- `update(newEndVal)`: 更新结束值
- `pauseResume()`: 暂停/恢复动画
- `printValue()`: 打印当前值

### Composition API (Vue 2 & 3)
组件同时提供了 Composition API 方式使用：

```vue
<script setup>
import { useCountup } from 'vue-countup-plus'
import { ref } from 'vue' // 或 '@vue/composition-api' in Vue 2

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

## 开发
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 构建
pnpm build
```


## 兼容性说明
- Vue 2: 需要安装 @vue/composition-api
- Vue 3: 开箱即用
- 通过 vue-demi 实现 Vue 2 和 Vue 3 的无缝切换
- TypeScript 支持: 完整的类型定义

## 许可证
MIT