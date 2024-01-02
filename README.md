# Projeto Angular com PrimeNG e PrimeFlex

Este projeto é um exemplo de um aplicativo Angular que utiliza as bibliotecas PrimeNG e PrimeFlex para criar um layout responsivo e atraente.

## Versões
@angular-devkit/architect       0.1602.10
@angular-devkit/build-angular   16.2.10
@angular-devkit/core            16.2.10
@angular-devkit/schematics      16.2.10
@angular/cli                    16.2.10
@schematics/angular             16.2.10
rxjs                            7.8.1
typescript                      5.1.6
zone.js                         0.13.3
- PrimeNG:                      16.2.0
- PrimeFlex:                    3.3.1 by PrimeTek

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) - Versão LTS recomendada
- [Angular CLI](https://angular.io/cli) - Instale globalmente usando o comando `npm install -g @angular/cli`

## Estilos e Temas
O projeto faz uso das bibliotecas PrimeNG e PrimeFlex para estilos e temas. As importações necessárias estão configuradas no arquivo app.component.html. Certifique-se de incluir essas importações em seus arquivos conforme necessário:

``` <!-- Adicione as importações no cabeçalho do seu arquivo app.component.html -->
<link rel="stylesheet" type="text/css" href="caminho/para/primeflex.css" />
<link rel="stylesheet" type="text/css" href="caminho/para/primeng.css" />
<link rel="stylesheet" type="text/css" href="caminho/para/tema/primeng.css" />
```


## Executando o Projeto 
Inicie o servidor de desenvolvimento do Angular:

```
ng serve
```

Acesse o aplicativo em http://localhost:4200. O aplicativo será recarregado automaticamente sempre que você fizer alterações no código-fonte.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

src/app: Contém os componentes, serviços e outros artefatos do Angular.
src/assets: Armazena arquivos estáticos, como imagens, estilos e fontes.

## Componentes Principais
O layout do projeto é construído usando os seguintes componentes principais:

p-grid: Componente do PrimeFlex para criação de layouts flexíveis.
p-col: Componente do PrimeFlex representando colunas do layout.
p-card: Componente do PrimeNG para criar caixas de conteúdo.


