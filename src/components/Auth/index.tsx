import useLogin from "Hooks/useLogin"
import { ReactElement } from "react"
import { Navigate } from "react-router-dom"

interface Props {
  children: ReactElement
}

const Auth = ({ children }: Props) => {
	const { isLoggedIn } = useLogin()

	const isLogged = async() => {
		const result = await isLoggedIn()
		if(result){
			return children
		}else{
			<Navigate to='/' />
		}
	}

	return(
		{isLogged}
	)
}

export default Auth