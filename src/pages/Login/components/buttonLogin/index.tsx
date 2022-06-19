import { Button, ButtonProps } from "antd"
import { useNavigate } from 'react-router-dom'
import { GoogleOutlined } from '@ant-design/icons'
import useLogin from 'Hooks/useLogin'
import { LoginButton } from './style'

interface props extends ButtonProps {
  children: string
}

const ButtonLogin = ({ children, ...rest }: props) => {
  const { login, isLoggedIn } = useLogin()
  const navigate  = useNavigate()

  const googleLogin = async() => {
    try{
      const userData = await login()
      const isLoggedInValidate = await isLoggedIn()
      console.log(isLoggedInValidate)
      navigate('/dashboard')
    }catch(error){
      console.log(error)
    }
  }

  return(
    <LoginButton 
      type="primary"
      icon={<GoogleOutlined />}
      {...rest}
      onClick={googleLogin}
    >
      {children}
    </LoginButton>
  )
}

export default ButtonLogin