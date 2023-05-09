
export const BASE_URL = 'https://rickandmortyapi.com/api/'

export const getSeasonById = async (id?: string) => {
	const response = await fetch(`${BASE_URL}episode/?episode=S0${id}`)
	return response.json()
}

export const getAllCharacters = async () => {
	const response = await fetch(`${BASE_URL}character`)
	return response.json()
}

export const getCharacterById = async (id?: string) => {
	const response = await fetch(`${BASE_URL}character/${id}`)
	return response.json()
}

