import { Outlet } from "react-router-dom"
import { Layout } from 'antd'
import Header from "./components/Header"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import { Container } from "./style";

const { Content } = Layout;

const LayoutDefault = () => {
  return(
    <Container>
      <Menu />
      <Container>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </Container>
  )
}

export default LayoutDefault