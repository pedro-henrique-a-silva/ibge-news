# PROJETO IBGE News

Este é um projeto feito em React com a utilização do superconjunto **Typescript** da linguagem JavaScript.

No projeto IBGE News, estou consumindo uma API de notícias do IBGE, e a ideia aqui é consumir essa API e listar as notícias na tela, proporcionando a possibilidade de o usuário filtrar as notícias e favoritá-las, se for o caso.

Para conseguir consumir esses dados, foi utilizada uma funcionalidade nativa do JavaScript que é a função **fetch**.

Também foi utilizado o **ContextAPI** para gerenciar estados globais da aplicação, a fim de facilitar algumas interações e evitar o chamado "prop drilling."

Para o estilo do projeto, utilizei a biblioteca **styled-components**. Gosto bastante dela, pois ajuda a evitar conflitos de classe no CSS, então já dá para tirar essa preocupação do projeto.

E, por último, mas não menos importante, realizei alguns testes durante toda a criação do projeto. Fiz esses testes a cada etapa do desenvolvimento para ter certeza de que tudo está funcionando corretamente.

# COMO ESTA APLICAÇÃO FUNCIONA

1. Para rodar esta aplicação, basta **clone** este repositório.
2. Execute o comando `npm install` ou `npm i` para instalar as dependências do projeto.
3. E execute o comando `npm run dev`. Esse comando deve abrir o seu navegador com o projeto rodando.
4. Para rodar os testes, basta executar o comando `npm test`.
5. E para ver a cobertura dos testes, execute o comando `npm run coverage`.