# Especificações Do Projeto

A concepção final da idéia do problema e os principais pontos a serem tratados neste projeto foi firmada a partir de nosso trabalho interativo de imersão, feita por todos do grupo, utilizando a platarforma [Miro](../Artefatos/README.md) equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Guilherme Silva tem 22 anos, é Repositor num mercadinho local. Pensa em
fazer faculdade de Engenharia de Software e poder um dia trabalhar de casa,
pois adora jogar, ver animes e assistir o seu futebol nas quartas e é solteiro.

* Estilo de vida: Caseiro.
* Hábitos de compra: Jogos, filmes, compras online, aplicativos.
* Quais mídias prefere: Internet.
* Quem os influencia: Artistas, influenciadores digitais, líderes políticos.
* Quais tecnologias usam: Computador, celular.
* Critérios de decisão na hora da compra: Preço.

Maria Aparecida, 46 Anos, Técnico de Segurança do Trabalho. Católica, acredita em esforço pessoal, estudo, trabalho, família e amigos. Gosta de ver series e filmes, beber com amigos.
* Estilo de vida: Caseira.
* Hábitos de compra: Roupas, acessórios, sapatos, compras online, aplicativos.
* Quais mídias prefere: Internet e televisão.
* Quem os influencia: Artistas, filósofos, influenciadores digitais, líderes religiosos.
* Quais tecnologias usam: Computador, celular.
* Critérios de decisão na hora da compra: Preço.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Guilherme Silva  | Saber das noticias sobre segurança           | Me atentar as teclonogias que utilizo               |
|Guilherme Silva      | Saber o que estou usando e se uso da maneira certa                 | Não vire estatística dos casos de golpe on-line |
|Guilherme Silva      | Conhecer melhor os hackers                 | Dismitifcar a idéia de existência dos "Hackers do Bem" |
|Maria Aparecida      | Conhecer melhor os aplicativos que uso                 | Possa saber se é seguro e confiável |
|Maria Aparecida      | Saber se posso criar uma conta PIX sem riscos | Para facilitar as transações do dia-a-dia sem medo |
|Maria Aparecida      | Enviar notícias importantes sobre golpe online aos meus netos                | Para que eles fiquem sabendo que devem se proteger na rede |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF01| O site deve apresentar tópicos relevantes, "sobre nós" e seções de outras páginas na inicial | ALTA | 
|RF02| O site deve possibilitar a navegação entre as páginas a partir de um menu superior   | ALTA |
|RF03| Exibir os tópicos relevantes (Módulos) da página inicial em modais   | MÉDIA |
|RF04| O site deve possuir uma paǵina destinada a conceituação e distinção dos tipos de Hackers (pessoa importante do problema)   | MÉDIA |
|RF05| O site deve possuir uma página de artigos sobre crimes digitais que permite ao usuário visualizar o texto completo da notícia/artigo com todos os detalhes da publicação | MÉDIA |
|RF06| O site deve permitir buscar por algum artigo ou notícia na seção de "crimes digitais"   | MÉDIA |
|RF07| O site deve permitir visualizar as informações de contatos dos criadores do site   | BAIXA |
|RF08| O site deve permitir o compartilhamento de notícias e artigos visualizadas em plataformas de redes sociais   | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF01| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF02| O site deve ser publicado em um ambiente acessível publicamente na Internet (conceito open-source, publicado no GitHub) |  ALTA |
|RNF03| A mudança entre páginas deve ser feita em no máximo 1s |  ALTA | 
|RNF04| O site deve ser compatível com os principais navegadores do mercado |  ALTA | 
|RNF05| O site deve apresentar conformidade visual, entre nível de brilho adequado e equilíbrio nos elementos de constrate | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Nenhum item do desenvolvimento pode ser terceirizado  |
|04| Todos os integrantes do grupo devem contribuir        |