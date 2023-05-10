import { useAuth } from '@/components/AuthPanel/userStore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'



export const useFirebase = () => {
	const { loginIn, onError } = useAuth(state => state)

	const submitAuthData = (email: string, password: string) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				loginIn(user.email)
			})
			.catch((error) => onError(error.message))
	}

}


