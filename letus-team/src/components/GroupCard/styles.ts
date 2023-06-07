import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
export const Container = styled.TouchableOpacity`
flex-direction: row;
padding: 32px;
gap:16px;
background-color: ${({theme})=>theme.colors.gray_500};
width: 100%;
border-radius: 8px;
margin:8px 0;
`
export const ClassRoomTitle = styled.Text`
font-size: ${({theme})=>theme.fontsize.lg}px;
color: ${({theme})=>theme.colors.white};
`
export const ClassRoomIcon = styled(UsersThree).attrs(({theme})=>({
    size:32,
    color:theme.colors.primary_500
}))``;
