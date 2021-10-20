# eslint-plugin-qhlab-eslint-plugin

Eslint plugins for QhLab

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-qhlab-eslint-plugin`:

```sh
npm install eslint-plugin-qhlab-eslint-plugin --save-dev
```

## Usage

Add `qhlab-eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "qhlab-eslint-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "qhlab-eslint-plugin/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


