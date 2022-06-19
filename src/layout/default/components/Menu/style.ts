import styled from "styled-components"
import { Layout, Menu } from 'antd'

const { Sider } = Layout;

export const Container = styled(Sider)`
  background-color: transparent;
  padding: 10px;
  border-right: 1px solid ${({theme}) => theme.colors.borderColor};
`

export const ContainerLogo = styled.div`
  text-align: center;
`

export const MenuList = styled(Menu)`
  border: 0;

  li{
    background-color: transparent !important;
    border-radius: 3px;
  }

  li.ant-menu-item-selected{
    background-image: linear-gradient(to right, ${props => props.theme.colors.primary} , ${props => props.theme.colors.secondary}) !important;
    color:  ${({theme}) => theme.colors.color}
  }

  li.ant-menu-item-selected:hover{
    color:  ${({theme}) => theme.colors.color}
  }
`