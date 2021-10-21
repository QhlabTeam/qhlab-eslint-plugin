# @qhlab/eslint-plugin

[![🚀 Release The Package](https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/release.yml)

[![✅ Run Tests](https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml/badge.svg)](https://github.com/iamyoki/qhlab-eslint-plugin/actions/workflows/test.yml)

🧪 Eslint plugins for QhLab

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
