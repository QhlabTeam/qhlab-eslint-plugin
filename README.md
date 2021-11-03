# @qhlab/eslint-plugin

<p align="center">
  <img src="logo.png" alt="logo" width="400px" />
</p>

<br />
<h2 align="center">🧪 Eslint plugins for QhLab</h2>
<br />

<p align="center">
  <a href="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml"><img src="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml/badge.svg?branch=main" alt="🚀 Release The Package"></a>
  <a href="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml"><img src="https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml/badge.svg" alt="✅ Run Tests"></a>
</p>

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
yarn i eslint -D
```

Next, install `@qhlab/eslint-plugin`:

```sh
yarn install @qhlab/eslint-plugin -D
```

## Usage

Config extends.

```json
{
  ...
  "extends": ["plugin:@qhlab/prettier", "plugin:@qhlab/react", ...]
}
```

Plugin rules

Add `@qhlab` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "plugins": ["@qhlab"]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@qhlab/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
