export const emailValidation = {
	required: 'Field is required',
	pattern: {
		value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message: 'Please enter a valid email'
	},
}
export const passwordValidation = {
	required: 'Field is required',
	minLength: {
		value: 7,
		message: 'Please enter more than 6 symbols'
	}
}