import { TextInputProps } from "react-native";
import {Input} from "./styles"
import { useTheme } from "styled-components/native";
function InputText({...rest}: TextInputProps) {
    const {colors} = useTheme()
    return ( 
        <Input placeholderTextColor={colors.gray_300}{...rest}/>
     );
}

export default InputText;