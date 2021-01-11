# APISaintSeiya
Uma api sobre Saint Seiya (Cavaleiros dos Zodíaco)

### Para rodar o projeto

```shell
#navegando para a home do projeto
$ cd <...>/back-end/
#instalando os node_modules
$ npm i
#startando o projeto
$ npm start
```

### Para executar a migração de banco

Antes de executar a migração tenha instalado o Postgresql 10 ou superior.

```shell
#navegando para a home do projeto
$ cd <...>/APISaintSeiya/
$ npx sequelize db:create
$ npx sequelize db:migrate
```
