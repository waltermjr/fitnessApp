import styled, { ThemedStyledProps } from 'styled-components'

interface propsContainer {
  size: number;
  margin?: string
}

export const Container = styled.span<propsContainer>`
  font-size: ${({ size }) => size }px;
  font-family: 'Roboto', sans-serif;
  ${({ margin }) => margin && `
    margin:  ${margin}
    ` }
`

export const FirstLetter = styled.span`
  background: -webkit-linear-gradient(${({ theme }) => theme.colors.primary},  ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  `
export const SecondLetter = styled.span`
  color: ${({ theme }) => theme.colors.color};
  font-weight: 300;
`