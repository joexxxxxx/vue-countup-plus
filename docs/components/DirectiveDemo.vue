<!-- docs/components/DirectiveDemo.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { vCountup } from '../../src/directive'

const simpleValue = ref(2024)
const endVal = ref(2024)
const startVal = ref(0)
const duration = ref(2)
const decimalPlaces = ref(0)
const useGrouping = ref(true)
const useEasing = ref(true)
const smartEasingThreshold = ref(999)
const smartEasingAmount = ref(333)
const separator = ref(',')
const decimal = ref('.')
const prefix = ref('')
const suffix = ref('')

const countupBinding = computed(() => ({
  endVal: endVal.value,
  startVal: startVal.value,
  duration: duration.value,
  decimalPlaces: decimalPlaces.value,
  useGrouping: useGrouping.value,
  useEasing: useEasing.value,
  smartEasingThreshold: smartEasingThreshold.value,
  smartEasingAmount: smartEasingAmount.value,
  separator: separator.value,
  decimal: decimal.value,
  prefix: prefix.value,
  suffix: suffix.value,
}))

function updateValue() {
  const newValue = Math.floor(Math.random() * 10000)
  simpleValue.value = newValue
  endVal.value = newValue
}
</script>

<template>
  <div class="demo-container">
    <h3>Simple Usage</h3>
    <div class="number-display">
      <span v-countup="simpleValue">0</span>
    </div>

    <h3>Advanced Usage with Options</h3>
    <div class="number-display">
      <span v-countup="countupBinding">0</span>
    </div>

    <div class="controls">
      <button class="update-btn" @click="updateValue">
        Update Numbers
      </button>

      <div class="options-grid">
        <div class="option-item">
          <label>Start Value:</label>
          <input v-model.number="startVal" type="number">
        </div>

        <div class="option-item">
          <label>Duration (s):</label>
          <input v-model.number="duration" type="number" min="0" step="0.5">
        </div>

        <div class="option-item">
          <label>Decimal Places:</label>
          <input v-model.number="decimalPlaces" type="number" min="0">
        </div>

        <div class="option-item">
          <label>Prefix:</label>
          <input v-model="prefix" type="text">
        </div>

        <div class="option-item">
          <label>Suffix:</label>
          <input v-model="suffix" type="text">
        </div>

        <div class="option-item">
          <label>Separator:</label>
          <input v-model="separator" type="text">
        </div>

        <div class="option-item">
          <label>Decimal:</label>
          <input v-model="decimal" type="text">
        </div>

        <div class="option-item">
          <label>Use Grouping:</label>
          <input v-model="useGrouping" type="checkbox">
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
  align-items: center;
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

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 800px;
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
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.option-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
</style>
