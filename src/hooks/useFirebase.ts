import { useAuth } from '@/components/AuthPanel/userStore'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'



export const useFirebase = () => {
	const { loginIn, onError } = useAuth(state => state)

	const submitAuthData = (email: string, password: string) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				if (user.email !== null) loginIn(user.email)

			})
			.catch((error) => onError(error.message))
	}


	const submitRegData = (email: string, password: string) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				if (user.email !== null) loginIn(user.email)
			})

			.catch((error) => onError(error.message))

	}

	return {
		submitAuthData, submitRegData
	}
}


