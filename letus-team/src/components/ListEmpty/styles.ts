import { SoccerBall} from "phosphor-react-native";
import styled from "styled-components/native";

export const EmptyContainer = styled.View`
align-items: center;
justify-content: center;
gap:16px
`;
export const EmptyTextContent = styled.Text`
color: ${({theme})=>theme.colors.gray_300};
font-size: ${({theme})=>theme.fontsize.lg}px;
font-family: ${({theme})=>theme.fontfamily.regular};
text-align: center;
`;
export const EmptyIcon = styled(SoccerBall).attrs(({theme})=>({
    size:56,
    color:theme.colors.secondary_700
}))``;