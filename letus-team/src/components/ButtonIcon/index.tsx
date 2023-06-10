import { TouchableOpacityProps } from "react-native";
import { Container,ButtonIconTypeStyleProps, Icon } from "./styles";
import {MaterialIcons} from "@expo/vector-icons";
type TButtonIconProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?:ButtonIconTypeStyleProps
}
export function ButtonIcon({type="primary",icon,...rest}:TButtonIconProps) {
    return ( 
        <Container>
            <Icon name={icon} type={type} {...rest}/>
        </Container>
     );
}
