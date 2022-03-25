# 🔥 Firebase Chat 💬

Um chat em Next.js usando os principais recursos do Firebase 😎

###### Demo
[https://firebase-chat-nine.vercel.app/escolher-chat](https://firebase-chat-nine.vercel.app/escolher-chat){:target="_blank"}

## Requisitos

1. Node 16+
2. NPM 8+
3. yarn 1.22+


## Envs

##### Variáveis de inicialização para o firebase

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_DATABASE_URL`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`

`NEXT_PUBLIC_FIREBASE_APP_ID`

##### Variável base para URL das imagens

`NEXT_PUBLIC_FIREBASE_BUCKET_URL`


## Executando o projeto

Execute os seguintes comandos para executar o projeto

1. Crie o arquivo .env.local com as variáveis informadas anteriormente de acordo com seu projeto firebase
2. Instale as dependencias `yarn`
3. Inicie o servidor local `yarn dev`
4. Aproveite! \o/


## Estrutura dos componentes

**components** - Componentes gerais (Header, Card)

**layouts** - Componentes de layout

**pages** - Componentes de página

**hooks** - Trechos de código com a parte lógica

**constants** - Variávei com valores fixos que serão usados em toda aplicação


## Principais bibliotecas usadas

**Next.js**
https://nextjs.org/docs/getting-started

**MUI**
https://mui.com/pt/getting-started/installation/

**React Chat Elements**
https://github.com/Detaysoft/react-chat-elements

**React Firebase Hooks**
https://github.com/csfrequency/react-firebase-hooks

**Firebase**
https://www.npmjs.com/package/firebase

## Recursos do firebase usados no projeto

1. Firestore
2. Cloud Storage
3. Authentication
4. Cloud Functions
5. Realtime Database

## Referências de documentação

https://firebase.google.com/docs/storage

https://firebase.google.com/docs/firestore

https://firebase.google.com/docs/database

https://firebase.google.com/docs/functions?hl=pt-br

https://firebase.google.com/docs/web/setup?hl=pt-br

https://firebase.google.com/docs/auth/web/password-auth

https://firebase.google.com/docs/firestore/solutions/presence?hl=pt-br
