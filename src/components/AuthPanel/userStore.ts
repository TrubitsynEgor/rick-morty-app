import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'



interface IUser {
	email: string
	isAuth: boolean
	error: null | string
	loginIn: (email: string | null) => void
	loginOut: () => void
	onError: (message: string) => void
}


export const useAuth = create<IUser>()(
	devtools(
		persist(
			(set) => ({

				email: '',
				isAuth: false,
				error: null,

				loginIn: (email: string) => {
					set((state) => ({ ...state, email, isAuth: true, error: null }))
				},
				loginOut: () => {
					set({
						email: '',
						isAuth: false,
						error: null,
					})
				},
				onError: (message: string) => {
					set((state => ({ ...state, error: message })))
				}

			}), {
			name: 'userStorage',
			storage: createJSONStorage(() => localStorage),
		})));


