# O que é o react native

Focado no desenvolvimento de aplicações multiplataforma (IOS & Android).

O react native foi desenvolvido em 2005 e é mantido até hoje pelo facebook.
Podemos desenvolver aplicações em diversos contextos, e aqui nesse módulo iremos introduzir as bases para o desenvolvimento com o native.

A documentação do react native se encontra [aqui](https://reactnative.dev/docs/getting-started).

## Iniciando no React Native

Para iniciar um projeto react native, você pode utilizar o [expo]() ou a [CLI]() para preparar o seu ambiente de desenvolvimento.


### Expo

Com o Expo go ele sobe um server na sua rede local onde você pode rodar o seu ambiente de desenvolvimento diretamente no app [expo go]() que você consegue baixar diretamente na loja de aplicativos como playstore ou applestore.

#### Requisitos para utilização:

- NodeJS

#### Workflows
O expo permite que você utilize dois workflows para que você faça configurações nativas para sua aplicação de formas diferentes.
A primeira delas é a ***Managed Workflow***, que não permite a alteração do código nativo (Ambientes ios e android).Isso pode ser positivo, num ponto em que a configuração se torna mais simples. Mas por outro lado você fica preso ao suporte fornecido pela equipe de devs do expo.

Já o ***Barer Workflow*** permite mesclar código nativo e código expo padrão. Trazendo mais flexibilidade para a aplicação.

### CLI

Com a CLI a criação do seu projeto native vai poder rodar num emulador de android, mas caso você não possua um ios não será possível usar um emulador ios diretamente.

### Como o native funciona

O código é convertido para javascript (no caso do typescript) e então essa aplicação passa por um bundle que converte o javascript para código nativo (que depende da plataforma, ios ou android).

### Rodando sua aplicação

Para executar a aplicação você pode usar o comando `npx expo start`, com isso vc pode tanto executar um emulador do android diretamente no seu computador, ou executar ela dentro do seu dispositivo móvel através da leitura do qrcode.

### Elementos do react native

Os elementos do native vêm diretamente da lib `react-native`
```tsx
import {Text,View,TextInput,TouchableOpacity} from 'react-native'
export default function app (){
    const handleClick = ()=>{console.log('test')}
    return (
        <View> /* Funciona como a div do html */
        <Text>Elemento de texto</Text> /* renderiza um texto */
        </View>
        <TextInput/> /* Input de texto */
        <TouchableOpacity onPress={handleClick}> /* Uma área clicável (botão) */ 
        <Text>Clique aqui</Text>
        </TouchableOpacity> 
    )
}
*/
```

#### Logbox
A logbox é como o debbuger ou o console do navegador, para identificar os erros presentes na sua aplicação.
