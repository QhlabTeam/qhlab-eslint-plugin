<p align="center">
  <img src="logo-medium.png" alt="logo" width="550px" />
</p>

<br />
<h1 align="center">@qhlab/eslint-plugin</h1>

<p align="center">
  <a href="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml"><img src="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml/badge.svg?branch=main" alt="🚀 Release The Package"></a>
  <a href="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml"><img src="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml/badge.svg" alt="✅ Run Tests"></a>
</p>
<p align="center">🧪 Qhlab ESLint 插件集</p>

<br />

<p align="center">
  <a href="README.md">English</a> | 简体中文
</p>

- [安装](#安装)
- [在 React 中使用](#在-react-中使用)
- [在 Vue2 中使用](#在-vue2-中使用)
- [在 Vue3 中使用](#在-vue3-中使用)
- [在原生 JavaScript 中使用](#在原生-javascript-中使用)
- [单独使用 Prettier 规则](#单独使用-prettier-规则)
- [配置参考](#配置参考)
- [开源协议](#开源协议)

## 安装

第一步，使用 yarn 安装 [ESLint](https://eslint.org/)：

```sh
yarn add eslint -D
```

第二步，安装 `@qhlab/eslint-plugin`：

```sh
yarn add @qhlab/eslint-plugin -D
```

## 在 React 中使用

在实际项目根目录中创建一个 `.eslintrc.json` 文件。

```json
{
  "extends": ["plugin:@qhlab/react"]
}
```

## 在 Vue2 中使用

确保项目中使用的 eslint 为 v7 最新版本，[因为 @vue/cli 暂不支持 v8 版本](https://github.com/vuejs/vue-cli/issues/6759)。

```sh
yarn add eslint@^7 -D
```

在实际项目根目录中创建一个 `.eslintrc.json` 文件。

```json
{
  "extends": ["plugin:@qhlab/vue"]
}
```

## 在 Vue3 中使用

确保项目中使用的 eslint 为 v7 最新版本，[因为 @vue/cli 暂不支持 v8 版本](https://github.com/vuejs/vue-cli/issues/6759)。

```sh
yarn add eslint@^7 -D
```

在实际项目根目录中创建一个 `.eslintrc.json` 文件。

```json
{
  "extends": ["plugin:@qhlab/vue3"]
}
```

## 在原生 JavaScript 中使用

使用 `plugin:@qhlab/base` 规则，默认情况下已引入 `plugin:@qhlab/react`、`plugin:@qhlab/vue`、`plugin:@qhlab/vue3` 三种规则。

在实际项目根目录中创建一个 `.eslintrc.json` 文件。

```json
{
  "extends": ["plugin:@qhlab/base"]
}
```

## 单独使用 Prettier 规则

使用 `plugin:@qhlab/prettier` 规则，默认情况下已引入 `plugin:@qhlab/react`、`plugin:@qhlab/vue`、`plugin:@qhlab/vue3` 三种规则。

在实际项目根目录中创建一个 `.eslintrc.json` 文件。

```json
{
  "extends": ["...your other rules", "plugin:@qhlab/prettier"]
}
```

> 提示: 请确保 prettier 是最新版本，以免配置被覆盖。

## 配置参考

| 名称                   | 继承于                                                       | 是否有修改 | 规则来源                                                     |
| ---------------------- | ------------------------------------------------------------ | -------------- | ------------------------------------------------------------ |
| plugin:@qhlab/prettier | plugin:prettier/recommended                                  | ✅              | [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) |
| plugin:@qhlab/base     | /                                                            | ✅              | [eslint official](https://eslint.org/docs/rules/)            |
| plugin:@qhlab/react    | plugin:@qhlab/base <br />plugin:@qhlab/prettier              | ✅              | [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) |
| plugin:@qhlab/vue      | plugin:@qhlab/base <br />plugin:vue/recommended <br />plugin:@qhlab/prettier | 否             | [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) |
| plugin:@qhlab/vue3     | plugin:@qhlab/base <br />plugin:vue/recommended <br />plugin:@qhlab/prettier | 否             | [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) |

## 开源协议

[MIT](https://choosealicense.com/licenses/mit/)

░██████╗░██╗░░██╗██╗░░░░░░█████╗░██████╗░
██╔═══██╗██║░░██║██║░░░░░██╔══██╗██╔══██╗
██║██╗██║███████║██║░░░░░███████║██████╦╝
╚██████╔╝██╔══██║██║░░░░░██╔══██║██╔══██╗
░╚═██╔═╝░██║░░██║███████╗██║░░██║██████╦╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░
