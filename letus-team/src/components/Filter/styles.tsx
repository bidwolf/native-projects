import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type FilterStyleProps={
    isActive?:boolean
}
export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    border-radius: 8px;
    align-items: center;
    padding: 16px;
    ${({theme,isActive})=>isActive&& css`
    border: 1px solid ${theme.colors.primary_500};
    `}
`
export const Title = styled.Text`
text-align: center;
font-size: ${({theme})=>theme.fontsize.lg+'px'};
font-family: ${({theme})=> theme.fontfamily.bold};
color: ${({theme})=> theme.colors.white};
text-transform: uppercase;
`