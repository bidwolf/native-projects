import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export type ButtonTypeStyle = 'primary' | 'secondary'|'danger' |'success'
type TProps={
    type: ButtonTypeStyle
}
export const ButtonContainer = styled(TouchableOpacity)<TProps>`
padding-top:24px;
padding-bottom:24px;
width:100%;
background-color: ${({theme,type})=>type==='primary'
    ?theme.colors.primary_500
    :type==='secondary'
        ?theme.colors.secondary_500
            :type==='danger'
            ?theme.colors.danger
            :theme.colors.success
};
position:relative;
margin-top: 32px;
bottom: 32px;
`
export const ButtonText = styled.Text`
text-align: center;
color: ${({theme})=>theme.colors.white};
font-size: ${({theme})=>theme.fontsize.lg}px;
`
