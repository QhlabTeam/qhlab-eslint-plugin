<p align="center">
  <img src="logo-medium.png" alt="logo" width="550px" />
</p>

<br />
<h1 align="center">@qhlab/eslint-plugin</h1>

<p align="center">
  <a href="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml"><img src="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml/badge.svg?branch=main" alt="🚀 Release The Package"></a>
  <a href="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml"><img src="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml/badge.svg" alt="✅ Run Tests"></a>
</p>

<p align="center">🧪 Eslint plugins for Qhlab</p>
<br />

<p align="center">
  English | <a href="README-zh_CN.md">简体中文</a>
</p>

- [Installation](#installation)
- [Use in React](#use-in-react)
- [Use in Vue2](#use-in-vue2)
- [Use in Vue3](#use-in-vue3)
- [Use in Vanilla JS](#use-in-vanilla-js)
- [Use Prettier rules alone](#use-prettier-rules-alone)
- [Config References](#config-references)
- [License](#license)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
yarn add eslint -D
```

Next, install `@qhlab/eslint-plugin`:

```sh
yarn add @qhlab/eslint-plugin -D
```

## Use in React

Create a `.eslintrc.json` file in your root dir.

```json
{
  "extends": ["plugin:@qhlab/react"]
}
```

## Use in Vue2

Make sure the version of eslint you are using is latest v7, because some new rules depends on eslint v7 and [`@vue/cli` doesn't support `eslint` v8](https://github.com/vuejs/vue-cli/issues/6759) currently.

```sh
yarn add eslint@^7 -D
```

Create a `.eslintrc.json` file in your root dir.

```json
{
  "extends": ["plugin:@qhlab/vue"]
}
```

## Use in Vue3

Make sure the version of eslint you are using is latest v7, because some new rules depends on eslint v7 and [`@vue/cli` doesn't support `eslint` v8](https://github.com/vuejs/vue-cli/issues/6759) currently.

```sh
yarn add eslint@^7 -D
```

Create a `.eslintrc.json` file in your root dir.

```json
{
  "extends": ["plugin:@qhlab/vue3"]
}
```

## Use in Vanilla JS

You don't need to use `plugin:@qhlab/base` along with `plugin:@qhlab/react` or `plugin:@qhlab/vue` or `plugin:@qhlab/vue3`, these have already added.

Create a `.eslintrc.json` file in your root dir.

```json
{
  "extends": ["plugin:@qhlab/base"]
}
```

## Use Prettier rules alone

You don't need to use `plugin:@qhlab/prettier` along with `plugin:@qhlab/react` or `plugin:@qhlab/vue` or `plugin:@qhlab/vue3`, these have already added.

Create a `.eslintrc.json` file in your root dir.

```json
{
  "extends": ["...your other rules", "plugin:@qhlab/prettier"]
}
```

> Note: Make sure prettier is the last one so it won't be overriden.

## Config References

| config name            | extends with                                                                   | have customize? | rules from                                                                   |
| ---------------------- | ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------------------------------------- |
| plugin:@qhlab/prettier | plugin:prettier/recommended                                                    | ✅               | [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) |
| plugin:@qhlab/base     | /                                                                              | ✅               | [eslint official](https://eslint.org/docs/rules/)                            |
| plugin:@qhlab/react    | plugin:@qhlab/base <br /> plugin:@qhlab/prettier                               | ✅               | [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)      |
| plugin:@qhlab/vue      | plugin:@qhlab/base <br /> plugin:vue/recommended <br /> plugin:@qhlab/prettier | no              | [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)              |
| plugin:@qhlab/vue3     | plugin:@qhlab/base <br /> plugin:vue/recommended <br /> plugin:@qhlab/prettier | no              | [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)              |

## License

[MIT](https://choosealicense.com/licenses/mit/)

░██████╗░██╗░░██╗██╗░░░░░░█████╗░██████╗░
██╔═══██╗██║░░██║██║░░░░░██╔══██╗██╔══██╗
██║██╗██║███████║██║░░░░░███████║██████╦╝
╚██████╔╝██╔══██║██║░░░░░██╔══██║██╔══██╗
░╚═██╔═╝░██║░░██║███████╗██║░░██║██████╦╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░
