import {NavigationContainer} from "@react-navigation/native"
import { AppRoutes } from "./app.routes"
import { useTheme } from "styled-components"
import { View } from "react-native"

export function Router (){
    const {colors} = useTheme()
    return(
    <NavigationContainer>
        <View style={{ flex:1, backgroundColor:colors.gray_600}}>
            <AppRoutes/>
        </View>
    </NavigationContainer>
    )
}