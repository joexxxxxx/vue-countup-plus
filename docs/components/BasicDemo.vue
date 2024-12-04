<!-- docs/components/BasicDemo.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { CountUp } from '../../src'

const endVal = ref(2024)
const options = ref({
  startVal: 0,
  duration: 2,
  decimalPlaces: 0,
  useGrouping: true,
  useEasing: true,
  smartEasingThreshold: 999,
  smartEasingAmount: 333,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '',
})

function updateValue() {
  endVal.value = Math.floor(Math.random() * 10000)
}
// const o = readonly({...options.value})
</script>

<template>
  <div class="demo-container">
    <!-- <div class="number-display">
      <CountUp :end-val="endVal" :options="o" />
    </div> -->
    <div class="number-display">
      <CountUp :end-val="endVal" :options="options" />
    </div>
    <div class="controls">
      <button class="update-btn" @click="updateValue">
        Update Number
      </button>

      <div class="options-grid">
        <div class="option-item">
          <label>Start Value:</label>
          <input v-model.number="options.startVal" type="number">
        </div>

        <div class="option-item">
          <label>Duration (s):</label>
          <input v-model.number="options.duration" type="number" min="0" step="0.5">
        </div>

        <div class="option-item">
          <label>Decimal Places:</label>
          <input v-model.number="options.decimalPlaces" type="number" min="0">
        </div>

        <div class="option-item">
          <label>Prefix:</label>
          <input v-model="options.prefix" type="text">
        </div>

        <div class="option-item">
          <label>Suffix:</label>
          <input v-model="options.suffix" type="text">
        </div>

        <div class="option-item">
          <label>Separator:</label>
          <input v-model="options.separator" type="text">
        </div>

        <div class="option-item">
          <label>Decimal:</label>
          <input v-model="options.decimal" type="text">
        </div>

        <div class="option-item">
          <label>Use Grouping:</label>
          <input v-model="options.useGrouping" type="checkbox">
        </div>

        <div class="option-item">
          <label>Use Easing:</label>
          <input v-model="options.useEasing" type="checkbox">
        </div>
      </div>
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
  flex-direction: column;
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
  margin: 0 auto;
  display: block;
}

.update-btn:hover {
  opacity: 0.8;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.option-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.option-item label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.option-item input[type="text"],
.option-item input[type="number"] {
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.option-item input[type="checkbox"] {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
