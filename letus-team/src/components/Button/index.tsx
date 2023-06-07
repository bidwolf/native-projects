import { TouchableOpacityProps } from 'react-native';
import {ButtonContainer,ButtonText, ButtonTypeStyle} from './styles'
type TButtonProps = {
    title:string
    type?:ButtonTypeStyle
}& TouchableOpacityProps
export function Button({title,type='primary',...rest}:TButtonProps) {
    return (
         <ButtonContainer type={type}>
            <ButtonText {...rest}>{title}</ButtonText>
        </ButtonContainer>
         );
}
