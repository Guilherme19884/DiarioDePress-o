# Api diario da pressão 🗓️💊
Objetivo é ter um relatório de anotações diarias do valor da pressão aferida e horário que tomou o 
medicamento

### Requistos não funcionais 📋
Camada de Autenticação 
Protejer contra Sql injection 
Protejer contra XQS
Protejer contra CRSF
Criar uma forma do paciente ter o relátorio via xml, viabilizar download para o paciente
Função para filtrar por um determinado espaço de tempo
Função para filtrar por valores mais altos na pressão
Realizar testes unitários e de Stress
Colocar na nuvem com Servless

#### Framework🥊
-Express,
-Prisma ou type orm


#### Será instalado TypeScript 🏋️‍♂️
Tentativa de evitar possiveis erros 
manter o código mais coeso

```Comandos para instalar
npm init -y

npm i typescript tsx tsup -D

npx tsc --init
```

```Organizar o TS Config
{
  "compilerOptions": {
  
    "target": "ES6",                                  
    "module": "commonjs",                               
    "esModuleInterop": true,                            
    "strict": true,   
    "outDir": "./dist"                                   
  }
}

```Organizar o Package json

"scripts": {
    "dev": "tsx src/server.ts",
    "dev:watch": "tsx src/server.ts",
    "dist": "tsup src",
    "dev:dist": "npm run dist"
  },

```