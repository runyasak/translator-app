import type { PokemonData, PokemonDetailData } from '@/models/pokemon.model'
import axios from 'axios'

export const getPokemonByName = async (name: string) => {
  const { data } = await axios.get<PokemonDetailData[]>(
    `https://pokedex-workshop-api.vercel.app/api/pokemons/${name}`
  )

  return data
}

export const getPokemons = async () => {
  const { data } = await axios.get<PokemonData[]>(
    'https://pokedex-workshop-api.vercel.app/api/pokemons'
  )

  return data
}
