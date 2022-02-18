const assert = require('assert');

const {ESLint} = require('eslint');

const getConfigFilePath = require('../../utils/getConfigFilePath');

const eslint = new ESLint({
  overrideConfigFile: getConfigFilePath('prettier'),
});

const code = `
const a = "hello";
const user={name:'a'}
`;

describe('Validate prettier config', () => {
  it('should report the prettier errors when using prettier config', async () => {
    const results = await eslint.lintText(code);
    assert.equal(results.length, 1);
    assert.ok(
      results[0].messages.find((m) => m.ruleId.includes('prettier/prettier'))
    );
  });
});
