# PROJETO IBGE news

Esse é um projeto feito em React com a utilização do super-set *Typescript* da linguagem javascript.

No projeto IBGE news estou consumindo uma API de noticias do ibge, e a ideia aqui é consumir essa api
e listar as noticias na tela proporcionando a possibilidade de o usuario filtrar as noticias e favoritar se for o caso.

Para conseguir consumir esses dados foi utilizado uma funcionalidade nativa do javascript que é a função *fetch*.

Foi utilizado também o *ContextAPI* para gerenciar estados globais a aplicação até para facilitar algumas interações, e evitar também o chamado prop-drilling.

Para o estilo do projeto utilizei a biblioteca *styled-components*, gosto bastante dela pois ajuda a evitar conflitos de classe no css, então já da pra tirar essa preocupação do projeto.

e por ultimo mais não menos importante, realizei alguns testes durante toda a criação do projeto, realizando esses testes a cada etapa do desenvolvimento, para ter certeza de tudo esta funcionando corretamente.

# COMO ESSSA APLICAÇÃO FUNCIONA

1. Para rodar essa aplicação basta evetuar o *clone* deste repositorio.
2. Rodar o comando `npm install` ou `npm i` para instalar as dependencias do projeto.
3. E rodar o comando `npm run dev`, esse comando já deve abrir o seu navegador com o projeto rodando
4. Para rodar os testes basta rodar o comando `npm test`.
5. E para ver a cobertura dos testes basta rodar o comando `npm run coverage`.

