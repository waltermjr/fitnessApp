import { loadGapiInsideDOM  } from 'gapi-script'

const useLogin = () => {
	const clientId = process.env.REACT_APP_CLIENT_ID as string
	let gapi: any
	let auth: any
	
	const getInstance = async() => {
		return new Promise(async (resolve, reject) => {
			gapi = await loadGapiInsideDOM();
			gapi.load("auth2", function() {
		
				gapi.auth2.init({
					client_id: clientId,
					scope: "email",
				}).then(async() => {
		
					auth = gapi.auth2.getAuthInstance();
					resolve('')
				}).catch((error:any) => {
					reject(error)
				})
			});
		});
	}

	const login = () => {
		return new Promise(async (resolve, reject) => {
			try{
				await getInstance()
				await auth.signIn()
				resolve(auth.currentUser.get().getBasicProfile())

			}catch(error){
				reject(error)
			}
		})
	}

	const logout = async() => {
		await getInstance()
		auth.signOut()
	}

	const isLoggedIn = async() => {
		await getInstance()
		return auth.isSignedIn.get()
	}

	return { login, logout, isLoggedIn }
}

export default useLogin