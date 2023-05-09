import { getCharacterById } from '@/services/rickAndMorty'
import { ICharacter } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IFavorites {
	favorites: ICharacter[],
	count: number,
	loading: boolean,
	error: Error | null,
	addFavorite: (id: string) => void
	removeFavorite: (id: string) => void
}


export const useFavorites = create<IFavorites>()(

	(set, get) => ({
		favorites: [],
		count: 0,
		loading: false,
		error: null,


		addFavorite: async (id: string) => {
			set({ loading: true })
			try {
				const response = await getCharacterById(id)
				set((state) => ({ favorites: [...state.favorites, response], error: null, count: state.count + 1 }))
			} catch (error) {
				if (error instanceof Error) {
					set({ error })
				}
			} finally {
				set({ loading: false })
			}
		},
		removeFavorite: (id: string) => {
			const filteredState = get().favorites.filter(el => el.id !== +id)
			set(state => ({ favorites: filteredState, count: state.count - 1 }))
		}

	}));


