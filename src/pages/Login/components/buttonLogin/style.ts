import styled from "styled-components"
import { Button } from "antd"

export const LoginButton = styled(Button)`
    background-image: linear-gradient(to right, ${props => props.theme.colors.primary} , ${props => props.theme.colors.secondary});
    border:0;

    &:hover {
        background-image: linear-gradient(to right, ${props => props.theme.colors.primary} , ${props => props.theme.colors.secondary});
        filter: brightness(.8)
    }
`