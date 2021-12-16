# Gestão de Configuração

Durante o desenvolvimento do projeto, utilizamos exclusivamente o GitHub como ferramenta de versionamento e hospedagem. 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `main`: versão já testada do software, porém instável
- `dev`: versão de desenvolvimento do software

Neste processo, foram sendo criadas as issues a partir de nossos repositórios pessoais, no qual fizemos o merge para um único repositório, unificando todos os artefatos anteriormetne desenvolvidos.

Para cada issue criada no GitHub, registramos-a no quadro Kanban que colocamos no Miro, no qual dividimos em 5 colunas, estas são:

Backlog
Em Andamento
Testes
Concluído
Publicado

Backlog: a issue está parada, aguardando seus requisitos serem detalhados ou alguém ter a disponibilidade de pegá-lo.

Em Andamento: a issue está sendo desenvolvida em uma branch exclusiva, a qual será mergida na master no final do projeto.

Testes: a issue já esta com todos os requisitos mínimos para ser entregue, agora alguém precisa pegar ela para testar, garantindo que não há bugs e que ela supra todos os requisitos para sua entrega.

Concluído: a issue está aguardando o desenvolvedor realizar o merge da master na branch dele a fim de solucionar todos os conflitos e assegurá-la a branch master, quanto a alterações que podem ter sido feitas por outras tarefas.

Publicado: significa que a issue passou por todas as outras etapas com sucesso e finalmente foi incluida na branch master.

## Hospedagem

Como utilizamos o GitHub para alocar o repositório de nosso projeto. Aproveitamos da funcionalidade do "GitHub pages" para hospedar todo nosso site de forma gratuita.
A partir das próprias configurações do repositório no GitHub, existe a opção "pages", onde é possível definir a branch de origem do nosso projeto.