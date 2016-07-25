# generator-nightwatchjs [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A Yeoman code generator for Nightwatch.js. Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites built on top of the Selenium WebDriver API

## Installation

First, install [Yeoman](http://yeoman.io) and generator-nightwatchjs using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-nightwatchjs
```

Then generate your new project:

```bash
yo nightwatchjs
```

## Scaffolded test suite layout
```
e2e
├── assertions
│   └── customValue.js
├── commands
│   └── resizePicture.js
├── output
│   ├── logs
│   │   └── .gitignore
│   └── screenshots
│       └── .gitignore
├── pages
│   ├── google.js
│   └── google-section.js
├── reports
│   └── .gitignore
├── tests
│   ├── google.js
│   └── google-section.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── globals.js
├── nightwatch.json
└── package.json
```

*Note:* The inclusion of the following files in the scaffolding is for demonstration purposes of typical nightwatch.js syntax, these files can (and should) be removed or modified prior to running your test suite.
- `assertions/customValue.js`
- `commands/resizePicture.js`
- `pages/google.js`
- `pages/google-section.js`
- `tests/google.js`
- `tests/google-section.js`
- `globals.js`

## License

MIT © [Joe Purdy](https://purdy.mit-license.org/)


[npm-image]: https://badge.fury.io/js/generator-nightwatchjs.svg
[npm-url]: https://npmjs.org/package/generator-nightwatchjs
[travis-image]: https://travis-ci.org/joepurdy/generator-nightwatchjs.svg?branch=master
[travis-url]: https://travis-ci.org/joepurdy/generator-nightwatchjs
[daviddm-image]: https://david-dm.org/joepurdy/generator-nightwatchjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/joepurdy/generator-nightwatchjs
[coveralls-image]: https://coveralls.io/repos/joepurdy/generator-nightwatchjs/badge.svg
[coveralls-url]: https://coveralls.io/r/joepurdy/generator-nightwatchjs
