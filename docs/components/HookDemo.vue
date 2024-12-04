<!-- docs/components/HookDemo.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCountup } from '../../src/useCountup'

const el = ref<HTMLElement>()
const endVal = ref(2024)

const { start, reset, pauseResume } = useCountup(el, endVal, {
  duration: 2,
  decimalPlaces: 0,
})

function randomUpdate() {
  endVal.value = Math.floor(Math.random() * 10000)
}

onMounted(() => {
  start()
})
</script>

<template>
  <div class="hook-demo">
    <div class="number-container">
      <span ref="el" class="number">0</span>
    </div>
    <div class="controls">
      <button class="control-btn" @click="start">
        Start
      </button>
      <button class="control-btn" @click="randomUpdate">
        Update
      </button>
      <button class="control-btn" @click="reset">
        Reset
      </button>
      <button class="control-btn" @click="pauseResume">
        Pause/Resume
      </button>
    </div>
  </div>
</template>

<style scoped>
.hook-demo {
  padding: 2rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-align: center;
}

.number-container {
  margin-bottom: 1.5rem;
}

.number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.control-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.control-btn:hover {
  opacity: 0.9;
}

@media (max-width: 640px) {
  .controls {
    flex-direction: column;
    gap: 0.5rem;
  }

  .control-btn {
    width: 100%;
  }
}
</style>
