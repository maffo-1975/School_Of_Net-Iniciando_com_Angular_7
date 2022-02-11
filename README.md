# IniciandoComAngular7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Lembretes

1. ng serve (Dentro da pasta raiz da aplicação) - Sobe a aplicação em http://localhost:4200;

2. Adicionar o conteúdo abaixo ao arquivo .browserslistrc para evitar uma mensagem de erro ao executar o "ng build";

not ios_saf 15.2-15.3

not safari 15.2-15.3

3. ng build (Dentro da pasta raiz da aplicação) - Converte a aplicação Angular inteira para JavaScript, gerando a subpasta dist/<subpasta da aplicação> com os arquivos que devem ser publicados no servidor web;

4. npm install -g http-server - Instala um servidor web local;

5. http-server.cmd (Dentro da subpasta dist/<subpasta da aplicação> gerada pelo "ng build") - Sobe o servidor web local que serve a aplicação através de http://localhost:8080.
