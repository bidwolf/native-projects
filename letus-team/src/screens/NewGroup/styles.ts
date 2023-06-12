import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const GroupIcon = styled(UsersThree).attrs(({theme})=>({
    size:56,
    color:theme.colors.primary_500
}))``;

export const Container = styled(SafeAreaView)`
flex:1;
background-color:${({theme})=>theme.colors.gray_600};
align-items:center;
padding: 32px;
position: relative;
gap: 16px;
`;
