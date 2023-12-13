<script setup lang="ts">
defineProps<{ modelValue?: string }>()

defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value
</script>

<template>
  <div class="field">
    <h1>Translate App</h1>
    <div class="form-wrapper">
      <label>Enter English</label>
      <input
        class="input"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event))"
      />
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
}

label {
  font-size: 2rem;
}
</style>
