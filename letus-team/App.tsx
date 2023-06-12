/* import {Groups} from '@screens/Groups'; */
/* import { NewGroup } from '@screens/NewGroup'; */
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts,Roboto_400Regular,Roboto_700Bold} from '@expo-google-fonts/roboto'
import theme from '@theme/index'
import { NewPlayers } from '@screens/Players';
import Loading from '@components/Loading';
export default function App() {
  const [fontsLoader]=useFonts({Roboto_400Regular,Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'}
      translucent/>
      {
      fontsLoader
      ?<NewPlayers groupName='Exódia'/>/* <Groups/> */
      :<Loading/>
    }
    </ThemeProvider>
  );
}

