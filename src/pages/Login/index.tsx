import Logo from "components/logo"
import { Container } from "./style"
import ButtonLogin from "./components/buttonLogin"

const Login = () => {
  return(
    <Container>
      <Logo size={25} margin={'0 0 10px 0'}/>
      <ButtonLogin>Faça login pelo Google</ButtonLogin>
    </Container>
  )
}

export default Login