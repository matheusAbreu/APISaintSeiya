# APISaintSeiya
Uma api sobre Saint Seiya (Cavaleiros dos Zodíaco)

### Para rodar o projeto

```shell
#navegando para a home do projeto
$ cd <...>/APISAINTSEIYA/
#instalando os node_modules
$ npm i

#
# -> configure o arquivo de enviroment preenchendo as variaveis do .env.exemplo e renomeando-o para .env
#

#execute a migração. Antes de executar a migração tenha instalado o Postgresql 12 ou superior.
$ npx sequelize db:create
$ npx sequelize db:migrate

#startando o projeto
$ npm run debug
```

### Para executar a migração de banco
```shell
#navegando para a home do projeto
$ cd <...>/APISaintSeiya/
$ npx sequelize db:create
$ npx sequelize db:migrate
```

## Executando com Dockerfile
> usando Docker
```sh
#com permissoes de root
$ docker build -t apisaintseiya:0.1 .

$ docker run -ti -v ~/Área\ de\ trabalho/APISaintSeiya/:/APISAINTSEIYA/ apisaintseiya:0.1
```
> usando podman
```sh
$ podman build -t apisaintseiya:0.1 .

$ podman run -v ~/Área\ de\ trabalho/APISaintSeiya/:/APISAINTSEIYA/:ro localhost/apisaintseiya:0.1
```
### Em ambos é possivel passar as variáveis de ambiente ao container
> utilize a flag -e

```sh
$ podman run -e DB_DATABASE=api_saint_seiya -e DB_HOST=valor -e DB_PASSWORD=valor -e DB_PORT=5432 -e DB_USER=valor -e DB_DIALECT=postgres -e APP_PORT_EXPOSE=4000 -v ~/Área\ de\ trabalho/APISaintSeiya/:/APISAINTSEIYA/:ro localhost/apisaintseiya:0.1

```
### Containers para teste

```sh
#mysql
$ podman run --name mysqlteste -e MYSQL_ROOT_PASSWORD=mysql -e MYSQL_USER=mysql -e MYSQL_TCP_PORT=8080 -e MYSQL_DATABASE=mysql -e MYSQL_PASSWORD=mysql -e MYSQL_HOST=127.0.0.1 -p 8080:8080 -d docker.io/library/mysql:latest

```
## ~~Rotas Implementadas~~ (Não concluido...)

|Metodo         | Rota                       | Retorno descrito                                               | Possiveis Status | Campos Retornados    | Campos Informados |
|---------------|----------------------------|----------------------------------------------------------------|------------------|----------------------|-------------------|
|GET            | "/"                        | Apresentação da API                                            |                  | { helloword: string }|        nenhum     |
|GET            | "/gods"                    |Lista com todos os deuses cadastrados                           |                  | {}                   |        nenhum     |
|POST           | "/gods"                    |Cadastra um novo deus                                           |                  |                      |                   |
|PUT            |~~"/gods/:god_id"~~         |Não Implementado                                                |                  |                      |                   |
|DELETE         |"/gods/:god_id"             |Remove deus pertencente ao id informado                         |       nenhum     |        nenhum        |                   |
|GET            | "/warriors_types"          |Lista todos os tipos de guerreiros cadastrados                  |                  |                      |        nenhum     |
|GET            | "/gods/:god/warriors_types"|Lista todos os tipos de guerreiros pertencentes ao deus indicado|                  |                      |        nenhum     |
|POST           | "/gods/:god/warriors_types"|Armazena um novo tipo de guerreiro pertencentes ao deus indicado|                  |                      |                   |
|DELETE         | "/warriors_types/:id"      |Remove tipo de guerreiro pertencente ao id informado            |                  |                      |        nenhum     |
