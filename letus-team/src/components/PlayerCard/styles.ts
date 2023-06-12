
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export const Container = styled.View`
${({theme})=>css`
background-color: ${theme.colors.gray_500};
padding: 16px;
flex-direction: row;
gap: 8px;
width: 100%;
align-items: center;
position: relative;
margin: 8px 0;
`}
`
export const Icon = styled(MaterialIcons).attrs(({theme})=>({
    size:24,
    color:theme.colors.gray_200,
    name:"person"
}))``
export const PlayerText = styled.Text`
    ${({theme})=>css`
        color: ${theme.colors.gray_200};
        font-size: ${theme.fontsize.md}px;
        font-family: ${theme.fontfamily.regular};
        `}
`