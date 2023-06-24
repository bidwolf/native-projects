# O que é esse projeto
Esse projeto é referente ao projeto 02 da rocketseat, que ...

## Anotações

- Path Mapping : Estratégia para criar Alias de importações enxutas e flexíveis dentro do react native utilizando o plugin `babel-plugin-module-resolver` do babel.
para fazer isso basta instalar o plugin como dependência de desenvolvimento através do comando 
`npm i babel-plugin-module-resolver` e então editar o arquivo babel.config.js com o seguinte conteúdo:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        "module-resolver",{
          root:["./src"],
          alias:{
            "@assets":"./src/assets",
            "@components":"./src/components",
            "@routes":"./src/routes",
            "@screens":"./src/screens",
            "@storage":"./src/storage",
            "@theme":"./src/theme",
            "@utils":"./src/utils",
            /* Outras rotas que você quiser */
          }
        }
      ]
    ]
  };
};

```
Com isso a importação com alias funcionará mas não possuirá intellisense, para resolver basta adicionar as informações de path ao arquivo tsconfig.json:
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@assets/*":["./src/assets/*"],
      "@components/*":["./src/components/*"],
      "@screens/*":["./src/screens/*"],
      "@routes/*":["./src/routes/*"],
      "@theme/*":["./src/theme/*"],
      "@storage/*":["./src/storage/*"],
      "@utils/*":["./src/utils/*"],
      /* ... outras rotas que você quiser */
    }
  }
}

```

## Utilizando styled components

Muito fácil, é como usar css normal.
A diferença é que você precisa usar uma extensão própria pro styled components pra que possamos usar o syntax highlighting.
> A extensão está no workspace suggestion.

Uma vez instalado basta utilizar da seguinte maneira:
```ts
import styled from "styled-components/native";
export const Container = styled.View`
flex:1;
background-color:#000;
align-items:center;
justify-content:center;
`
export const Header = styled.Text`
color: #fff;
text-align: center;
font-size: 64px;
`
```

> Em seguida você pode importar e usar cada um como se fosse um componente react padrão.

### Criando temas

Não vou dizer exatamente como você deve criar seus tokens, aqui vou ensinar apenas a forma que vc pode usar esse tema.

Primeiro vc deve colocar o ThemeProvider do styledComponents em torno do app, e passar o tema como parâmetro.

Para utilizar existem diferentes modos, o melhor deles, se da ao criar a tipagem dos seus tokens diretamente na sua aplicação. Para isso você precisará criar uma pasta @types dentro da pasta src e  o arquivo styled.d.ts com o seguinte código nele:

```ts
import 'styled-components'
import theme from '@theme/index'

declare module 'styled-components'{
    type ThemeType = typeof theme;
 export interface DefaultTheme extends ThemeType {}
}
```
> isso criará um namespace onde é possível utilizar todos os tokens definidos no arquivo de configuração onde o objeto styled estiver sendo utilizado.

Agora é só usar:
```ts
import styled from "styled-components/native";
export const Container = styled.View`
flex:1;
background-color:${({theme})=>theme.colors.gray_700};
align-items:center;
justify-content:center;
`
export const Header = styled.Text`
color: #fff;
text-align: center;
font-size: 64px;
`
```
Outro fato interessante sobre styled components é que você também pode utilizar os atributos da forma que precisar, da seguinte forma:
```ts
import styled from 'styled-components/native'
export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme})=>({
    color: theme.colors.primary_500,
    size:"large"
}))``;

```
a propriedade attrs permite que você utilize devidamente as propriedades de estilização por exemplo de um determinado elemento. Ainda sendo possível utilizar a estilização do styledComponent no final do mesmo

Também é possível utilizar o método `css` para retornar o estilo css da sua aplicação, podendo ser utilizado da seguinte forma:

```ts
import styled, {css} from "styled-components/native"

export const Container = styled.View`
${({theme})=>css`
  width:100%;
  background-color: ${theme.colors.gray_600};
`}
`
```

> Apenas uma sintaxe diferente para o que viemos utilizando anteriormente.

## Navegação

Existem diversos tipos de navegação existentes para se utilizar em aplicações native. Nesse módulo são apresentados 3 tipos de navegação. Sendo eles:

- Stack Navigation

- Tab Navigation

- Drawer Navigation

> Para este módulo, utilizaremos o [React Navigation](https://reactnavigation.org/docs/getting-started/), bastando seguir o guia de getting started para instalação e configuração.

### Stack Navigation
O Stack navigation é um modelo de navegação utilizado para construção de navegação em pilhas.
É onde se utiliza por exemplo um botão voltar para ir para uma posição anterior na pilha. E botões auxiliares para ir para uma determinada camada na pilha de navegação.

> Esse é o primeiro tipo de navegação a ser utilizado.

Primeiramente você deve envolver seu app no container de Navegação para que o React Navigation possa prover a navegação por toda aplicação.

Pode ser feito de diversas formas também, mas é interessante que você crie arquivos de rotas para separar sua aplicação. Assim permitindo que você utilize determinada rota baseado em outros fatores como autenticação por exemplo!

Assim sendo, primeiro, crie um arquivo na pasta src/routes chamado app.routes.tsx ( ou qualquer nome que preferir)
e necessariamente você deverá utilizar a seguinte sintaxe para criação de novas rotas

```tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Para utilização da navegação em stack
import { MyScreen } from '@screens/MyScreen';
import { SecondScreen } from '@screens/SecondScreen';

/* alternativamente você pode utilizar
const Stack = createNativeStackNavigator() 
return (
  <Stack.Navigator>
    <Stack.Screen name="myscreen" component={MyScreen}/>
  </Stack.Navigator>
)
*/
const {Navigator,Screen} = createNativeStackNavigator()
export function AppRoutes(){
    return(
    <Navigator>
        <Screen name='myScreen' component={MyScreen}/>
        <Screen name='mySecondScreen' component={SecondScreen}/>
    </Navigator>
    )
}
```

Esse arquivo apenas fornece a lista de páginas da sua aplicação, começando com a primeira página passada dentro de Navigator, alternativamente você pode utilizar a propriedade `initialRouteName` para definir o nome da página inicial.

A principio esse Navigator fornece diretamente um header com o nome da página atual. Para remover basta utilizar a propriedade `screenOptions` para adicionar configurações adicionais para o Navigator.

Para utilizar as rotas dentro da aplicação você primeiramente deve tipar as rotas, especificando o que elas necessitam diretamente na aplicação.
Para que isso seja feito crie um arquivo `*.d.ts` para aplicar a tipagem das rotas onde devem conter:

```ts
export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            myScreen: undefined // tipo de parâmetro
            mySecondScreen: { groupName: string } // tipo do segundo parâmetro
        }
    }
}

```

> Agora você poderá utilizar a tipagem dentro do hook `useNavigation()`
```tsx
type RouteParams={
    groupName:string
}
export function SecondScreen(){
  const navigation = useNavigation()
  const {groupName} = navigation.params as RouteParams
  return (
    <>
      <Group groupName={groupName}/>
      <Button onPress={navigation.navigate('myScreen')}></Button>
    </>
    )
}
```
> Na página inicial:

```tsx
export function MyScreen(){
  const navigation = useNavigation()
  const [groupName,setGroupName] = useState('')
  const handleGoToNextPage = function(){
    navigation.navigate('mySecondScreen',{groupName})
    }
  return (
    <>
      <Home/>
      <Button onPress={handleGoToNextPage} title={"Ir pra segunda página"}/>
    </>
    )
}
```
> Com typescript, o texto `mySecondScreen` já vai ser automaticamente sugerido pelo autocomplete graças a tipagem feita no arquivo `navigation.d.ts`, bem como a sugestão de parâmetro na página inicial.