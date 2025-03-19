npm i typescript @types/node tsx -D
npm i @biomejs/biome -D
npm i fastify @fastify/cors zod fastify-type-provider-zod
npx tsc --init

Alterei de "node16" para "bundler"
"moduleResolution": "bundler"

Alterei de "node16" para "ESNext"
"module": "ESNext",

npx biome -h
npx biome init

docker-compose


VALIDAÇÃO -> manipulando e validando os dados de saida
SERIALIZAÇÃO -> manipulando e validando os dados de saida

npm i @fastify/swagger @fastify/swagger-ui
npm i @fastify/multipart
    - para lidar com multipart form data

npm i vitest -D 
npm i vite-tsconfig-paths -D

principais comandos de teste do vitest:
    - a -> rodar todos os teste novamente
    - f -> rodar os testes falhados
    etc...