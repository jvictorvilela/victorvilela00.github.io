# FrontEnd Base
> Base para o frontend de projetos.

O repositório contém os diretórios, dependencias e tasks (gulp) necessários para o frontend de um projeto.

## Instalação

Instalação da CLI do gulp (caso não tenha):
```sh
npm install --global gulp-cli
```

Instalação das dependências:
```sh
npm install
```


## Como usar

Para compilar os assets, minificar e otimizar as imagens, basta usar:
```sh
npm run prod
```

## Diretórios

- **_css:_** Arquivos .css compilados e minificados. Todo o sass será compilado para css/style.min.css.
- **_sass:_** Arquivos .scss ou sass. Obs.: O arquivo style.min.scss deve conter os imports dos arquivos neste diretório.
- **_js:_** Arquivos .js e arquivos .js minificados (.min).
- **_fonts:_** fontes.
- **_images:_** imagens (as imagens neste diretório serão otimizadas pelo Gulp).
- **_node_modules:_** dependências.

