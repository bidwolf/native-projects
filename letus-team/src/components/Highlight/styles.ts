import styled from "styled-components/native";
export const Container = styled.View`
margin: 32px 0;
width: 100%;
gap: 8px;
`
export const Title = styled.Text`
text-align: center;
font-size: ${({theme})=>theme.fontsize.xl+'px'};
font-family: ${({theme})=> theme.fontfamily.bold};
color: ${({theme})=> theme.colors.white};

`
export const Subtitle = styled.Text`
text-align: center;
font-size: ${({theme})=>theme.fontsize.lg+'px'};
font-family: ${({theme})=> theme.fontfamily.regular};
color: ${({theme})=> theme.colors.gray_300};

`