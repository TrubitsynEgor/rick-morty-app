export interface ISeasons {
	id: number
	name: string
	air_date: string
	episode: string
}

export interface ICharacter {
	id: number,
	name: string,
	status: string,
	species: string,
	type: string,
	gender: string,
	origin: {
		name: string,
	},
	image: string,
}