<!-- docs/components/DirectiveDemo.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { vCountup } from '../../src/directive'

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
  <div class="demo-container">
    <div class="number-display">
      <span v-countup="{ value: endVal, options }">0</span>
    </div>
    <div class="controls">
      <button class="update-btn" @click="updateValue">Update Number</button>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin: 1rem 0;
}

.number-display {
  font-size: 3rem;
  font-weight: bold;
  color: var(--vp-c-brand);
  text-align: center;
  margin-bottom: 1rem;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.update-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.update-btn:hover {
  opacity: 0.8;
}
</style>
