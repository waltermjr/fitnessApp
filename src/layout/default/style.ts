import { Layout } from 'antd'
import styled from 'styled-components'

export const Container = styled(Layout)`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`