import { Button, ButtonProps } from "antd"
import { useNavigate } from 'react-router-dom'
import { GoogleOutlined } from '@ant-design/icons'
import useLogin from 'Hooks/useLogin'

interface props extends ButtonProps {
  children: string
}

const ButtonLogin = ({ children, ...rest }: props) => {
  const { Login } = useLogin()
  const navigate  = useNavigate()

  const googleLogin = async() => {
    try{
      const userData = await Login()
      console.log(userData)
      navigate('/dashboard')
    }catch(error){
      console.log(error)
    }
  }

  return(
    <Button 
      type="primary"
      icon={<GoogleOutlined />}
      {...rest}
      onClick={googleLogin}
    >
      {children}
    </Button>
  )
}

export default ButtonLogin