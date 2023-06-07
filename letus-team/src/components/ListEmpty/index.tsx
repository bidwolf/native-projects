import { Icon } from "phosphor-react-native";
import { EmptyContainer, EmptyIcon, EmptyTextContent } from "./styles";
type TListEmptyProps={
    message:string
}
function ListEmpty({message}:TListEmptyProps) {
    return (
    <EmptyContainer>
        <EmptyIcon/>
        <EmptyTextContent>{message}</EmptyTextContent>
    </EmptyContainer> );
}

export default ListEmpty;