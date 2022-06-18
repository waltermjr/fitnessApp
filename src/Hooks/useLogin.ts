import { loadGapiInsideDOM  } from 'gapi-script'

const useLogin = () => {
	const clientId = process.env.REACT_APP_CLIENT_ID as string

	const Login = () => {

		return new Promise(async (resolve, reject) => {

			const gapi = await loadGapiInsideDOM();

			gapi.load("auth2", function() {

				gapi.auth2.init({
					client_id: clientId,
					scope: "email",
				}).then(async() => {

					const auth = gapi.auth2.getAuthInstance();
					await auth.signIn()
					resolve(auth.currentUser.get().getBasicProfile())

				}).catch((error:any) => {
					reject(error)
				})
			});
		})
	}

	return { Login }
}

export default useLogin