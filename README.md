# b2rise-backend-challenge

This repository includes all [VAEES/2-backend-challenge](https://github.com/VAEES/2-backend-challenge) challenges

### Typescript and Clean Code challenges
Each typescript and clean code challenge is identified by an index.ts and a index.test.ts file, both stored in respective challenge folder (e.g. [1. Testes de TypeScript/1.1 Manipulação de Tipos e Generics](/challenges/1_typescript/1.1_types-generics/index.ts)).

### SQL challenge
In the other hand, each sql challenge is identified by a query.sql file and there is not test files for them.

### Installation and running tests
Before running the tests, you should follow steps below:

1 - In your terminal, run:
```
git clone https://github.com/develowl/b2rise-backend-challenge
```
2 - Enter the cloned repository folder and install dependencies with a package manager of your choice (this project is using [PNPM](https://pnpm.io/pt/installation))
```
pnpm install
```
3 - Then, you can run typescript and clean code challenges individually, by running:
- Typescript challenge:
  ```
  pnpm test:typescript-challenge
  ```
- Clean code challenge:
  ```
  pnpm test:clean-code-challenge
  ```
- Running all test:
  ```
  pnpm test
  ```
