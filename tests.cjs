const path = require('node:path');
const assert = require('node:assert/strict');
const { exit } = require('node:process');

const { ESLint } = require('eslint');

void (async function run() {
  {
    const maintainersEslint = new ESLint({
      cwd: path.resolve(__dirname, 'fixtures'),
    });

    const passing = await maintainersEslint.lintFiles(['passing.mts']);
    assert(passing.length === 1, 'Expected one file to match');
    assert(
      passing[0].errorCount + passing[0].warningCount === 0,
      `Expected no errors and no warnings, actual: errors: ${passing[0].errorCount}, warnings: ${passing[0].warningCount}`,
    );

    const failing = await maintainersEslint.lintFiles(['failing.mts']);
    assert(failing.length === 1, 'Expected one file to match');
    assert(
      failing[0].errorCount + failing[0].warningCount !== 0,
      `Expected errors or warnings, actual: errors: ${failing[0].errorCount}, warnings: ${failing[0].warningCount}`,
    );

    console.log('All tests ran');
  }
})().catch((error) => {
  console.error(error);

  exit(-1);
});
