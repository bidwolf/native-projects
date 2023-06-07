import { TouchableOpacityProps } from "react-native";
import { ClassRoomIcon, ClassRoomTitle, Container } from "./styles";

type TGroupCardProps = {
    classroomName: string
}& TouchableOpacityProps
export function GroupCard({classroomName,...rest}:TGroupCardProps) {
    return (
        <Container {...rest}>
            <ClassRoomIcon/>
            <ClassRoomTitle>{classroomName}</ClassRoomTitle>
        </Container>
     );
}
