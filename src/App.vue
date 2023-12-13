<script setup lang="ts">
import { ref } from 'vue'
import BaseField from './components/BaseField.vue'
import BaseLanguageSelect from './components/BaseLanguageSelect.vue'
import { postTranslate } from './services/translate'
import { getPokemons } from './services/pokemon.service'
import type { PokemonData } from './models/pokemon.model'

const myText = ref('')

const translateLang = ref('')

const result = ref('')

const myPokemon = ref<PokemonData>()

const onLanguageChange = (value: string) => (translateLang.value = value)

const onClickTranslate = () => {
  result.value = postTranslate(myText.value, translateLang.value)
}

getPokemons().then((data) => (myPokemon.value = data[0]))
</script>

<template>
  <div class="pokemon-wrapper">
    <h1>
      {{ myPokemon?.name }}
    </h1>
    <img :src="myPokemon?.img" />
  </div>
  <BaseField v-model="myText" />

  <h1>Text: {{ myText }}</h1>

  <BaseLanguageSelect :language="translateLang" @language-change="onLanguageChange($event)" />

  <h1>Lang: {{ translateLang }}</h1>

  <button @click="onClickTranslate">Translate</button>

  <h1 v-if="result">Result: {{ result }}</h1>
</template>

<style scoped>
button {
  padding: 1rem;
  background-color: greenyellow;
  color: black;
  border-radius: 1rem;
  cursor: pointer;
  border: 0;
}

.pokemon-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
}
</style>
