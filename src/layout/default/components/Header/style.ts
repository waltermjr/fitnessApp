import styled from "styled-components"
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderLayout = styled(Header)`
  background-color: transparent;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
`