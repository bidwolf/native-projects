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

### criando temas

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