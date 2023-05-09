import { useFavorites } from '@/components'


export const useFavoritesHandler = () => {
	const addFavorite = useFavorites(state => state.addFavorite)
	const removeFavorite = useFavorites(state => state.removeFavorite)
	const favorites = useFavorites(state => state.favorites)

	const handleFavorites = (id: string) => {
		if (!favorites.some(el => el.id === +id) || favorites.length === 0) {
			addFavorite(id)
		} else {
			removeFavorite(id)
		}
	}

	return { handleFavorites, favorites }
}