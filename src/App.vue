<script setup lang="ts">
import { ref } from 'vue'
import BaseField from './components/BaseField.vue'
import BaseLanguageSelect from './components/BaseLanguageSelect.vue'

const myWord = ref('')

const languageCode = ref('')

const onLanguageChange = (value: string) => (languageCode.value = value)
</script>

<template>
  <h1>Hello World</h1>
  <BaseField v-model="myWord" />

  <BaseLanguageSelect :language="languageCode" @language-change="onLanguageChange($event)" />

  <button>Translate !!</button>
</template>
