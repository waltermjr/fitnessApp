import { Container, FirstLetter, SecondLetter } from "./style"

interface props {
    size?: number;
    margin?: string
}

const Logo = ({ size = 20, margin }: props) => {
    return(
        <Container size={size} margin={margin}>
            <FirstLetter>Fitness</FirstLetter>
            <SecondLetter>App</SecondLetter>
        </Container>
    )
}

export default Logo