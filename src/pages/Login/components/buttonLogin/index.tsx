import { Button, ButtonProps } from "antd"
import { GoogleOutlined } from '@ant-design/icons'

interface props extends ButtonProps {
  children: string
}

const ButtonLogin = ({ children, ...rest }: props) => {
  return(
    <Button 
      type="primary"
      icon={<GoogleOutlined />}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonLogin