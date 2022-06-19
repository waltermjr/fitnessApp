import Logo from 'components/logo'
import { Container, ContainerLogo, MenuList } from './style'

export const Menu = () => {
  const items = [
    {key: '1', label: 'Menu 1'},
    {key: '2', label: 'Menu 1'},
    {key: '3', label: 'Menu 1'},
    {key: '4', label: 'Menu 1'}
  ]

  return(
    <Container>
      <ContainerLogo>
        <Logo size={22} />
      </ContainerLogo>
      <MenuList items={items} />
    </Container>
  )
}

export default Menu
