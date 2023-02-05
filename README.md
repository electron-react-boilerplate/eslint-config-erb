# eslint-config-erb

![Test](https://github.com/electron-react-boilerplate/eslint-config-erb/workflows/Test/badge.svg)

The eslint config for [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).

The config extends [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) by adding support for the following:

- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)

and more...

## Usage

1. Install the config:

```bash
# Yarn
yarn add --dev eslint-config-erb
# NPM
npm install --save-dev eslint-config-erb
```

2. Extend the config

```jsonc
// .eslintrc.json
{
  "extends": "erb"
}
```
