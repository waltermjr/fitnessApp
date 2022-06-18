import useLogin from "Hooks/useLogin"
import { useEffect } from "react"

const Dashboard = () => {
	const { isLoggedIn } = useLogin()

	
	useEffect(() => {
		const verifyIsLogged = async() => {
			const result = await isLoggedIn()
			console.log(result)
		};

		verifyIsLogged()
	},[])

	return <h1>Dashboard</h1>
}

export default Dashboard