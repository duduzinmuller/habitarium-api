# habitarium-api

## O que instalar:

npm i fastify
npm i -D typescript @types/node
npm i -D ts-node ts-node-dev
npm i @fastify/swagger-ui
npm i @fastify/swagger
npm i fastify-type-provider-zod
npm i dotenv
npm install drizzle-orm postgres
npm install drizzle-kit -D
npm install pg @types/pg

change tsconfig.json to: "moduleResolution": "nodenext",

## Alterações no backend
npx drizzle-kit push


## Arquitetura hexagonal
https://medium.com/@yecaicedo/structuring-a-node-js-project-with-hexagonal-architecture-7be2ef1364e2


// Controller / Repository / Use Cases -> Factory