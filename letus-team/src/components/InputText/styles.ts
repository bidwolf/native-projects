import { TextInput } from "react-native";

import styled from "styled-components/native";

export const Input = styled(TextInput)`
background-color: ${({theme})=>theme.colors.gray_700};
color:${({theme})=>theme.colors.white};
padding: 16px;
width: 100%;
border-radius: 8px;
font-size: ${({theme})=>theme.fontsize.lg}px;
`;