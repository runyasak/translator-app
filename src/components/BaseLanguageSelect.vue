<script setup lang="ts">
const props = defineProps<{ language?: string }>()
defineEmits<{ (e: 'languageChange', value: string): void }>()

const languages = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'French', value: 'fr' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Simplified Chinese', value: 'zh-CN' },
  { label: 'Spanish', value: 'es' },
  { label: 'Swahili', value: 'sw' },
  { label: 'Thai', value: 'th' }
]

const getSelectedClass = (value: string) => `opt ${props.language === value ? 'selected' : ''}`
</script>

<template>
  <div>
    <label class="label">Select Language</label>
    <div class="opts">
      <div
        v-for="language in languages"
        :key="language.label"
        :class="getSelectedClass(language.value)"
        @click="$emit('languageChange', language.value)"
      >
        {{ language.label }}
      </div>
    </div>
  </div>
</template>
