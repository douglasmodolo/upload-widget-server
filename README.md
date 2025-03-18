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

