import { ButtonIcon } from "@components/ButtonIcon";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color:${({theme})=>theme.colors.gray_600};
align-items:center;
padding: 32px;
position: relative;
gap: 16px;
`;
export const Form = styled.View`
width: 100%;
background-color:${({theme})=>theme.colors.gray_700};
justify-content: center;
flex-direction: row;
`
export const Inline = styled.View`
width: 100%;
background-color:${({theme})=>theme.colors.gray_600};
justify-content: center;
align-items: center;
flex-direction: row;
`
export const NumberOfPlayers = styled.Text`
    ${({theme})=>css`
        color: ${theme.colors.gray_200};
        font-family: ${theme.fontfamily.bold};
        font-size: ${theme.fontsize.sm}px;
    `}
`