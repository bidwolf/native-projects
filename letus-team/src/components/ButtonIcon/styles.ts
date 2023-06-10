import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export type ButtonIconTypeStyleProps =
  | "primary"
  | "secondary"
  | "danger"
  | "success";
type props = {
  type: ButtonIconTypeStyleProps;
};
export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 56px;
  right: 0;
  height: 100%;
`;
export const Icon = styled(MaterialIcons).attrs<props>(({ theme, type }) => ({
  size: 24,
  color:
    type === "primary"
      ? theme.colors.primary_500
      : type === "secondary"
      ? theme.colors.secondary_500
      : type === "danger"
      ? theme.colors.danger
      : theme.colors.success,
}))``;
