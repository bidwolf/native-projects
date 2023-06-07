import { Container, Subtitle, Title } from "./styles";
type THighlightProps = {
    title:string
    subtitle:string
}
function Highlight({title,subtitle}:THighlightProps) {
    return ( 
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
     );
}

export default Highlight;