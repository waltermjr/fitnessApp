import theme from 'global/styles/theme'
import styled, { ThemedStyledProps } from 'styled-components'

interface propsContainer {
    size: number;
    margin?: string
}

export const Container = styled.span<propsContainer>`
    font-size: ${({ size }) => size }px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    ${({ margin }) => margin && `
        margin:  ${margin}
    ` }
`

export const FirstLetter = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`
export const SecondLetter = styled.span`
    color: ${({ theme }) => theme.colors.color}
`