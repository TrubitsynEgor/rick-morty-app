import { ISeasons } from '@/types'

export const BASE_URL = 'https://rickandmortyapi.com/api/'

export const getSeasonById = async (id?: string) => {
	const response = await fetch(`${BASE_URL}episode/?episode=S0${id}`)
	return response.json()
}

