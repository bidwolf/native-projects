import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, PlayerText } from "./styles";

type TPlayerCardProps={
    playerName:string
    onRemove:()=>void
}
export function PlayerCard({playerName,onRemove}:TPlayerCardProps) {
    return (
    <Container>
        <Icon />
        <PlayerText>{playerName}</PlayerText>
        <ButtonIcon icon="close" type="danger" onPress={onRemove}/>
    </Container>
     );
}

