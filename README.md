# storskegg.github.io

Just a place to keep my resume up-to-date.

## Goals

The same code should look good...
1. In browser
2. On mobile
3. In Print/PDF

## Development

Static site served by GitHub Pages. `css/resume.css` is compiled from
`scss/resume.scss` and committed — GitHub serves the committed file as-is.

Node version is pinned in `.node-version` / `.nvmrc` (current LTS).

```sh
nvm use          # pick up the pinned Node version
npm install
npm run build    # compile scss/resume.scss -> css/resume.css (minified)
npm run dev      # build, then watch SCSS and serve with live reload at http://localhost:3000
```

`npm run watch` and `npm run serve` are also available individually.

Tooling: [Dart Sass](https://sass-lang.com/dart-sass/) for compilation,
[Browsersync](https://browsersync.io/) for the local server.

## TODO:

- Figure out conditional headers on long-section page-breaks to present something like "Foo Bar Cont'd" for section "Foo Bar"
