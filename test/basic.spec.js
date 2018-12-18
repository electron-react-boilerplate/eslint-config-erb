const { CLIEngine } = require('eslint');

describe('basic', () => {
  it('should report semicolon errors', () => {
    const cli = new CLIEngine({
      useEslintrc: true
    });
    expect(cli.executeOnFiles([require.resolve('./bad.js')])).toMatchSnapshot();
  });
});
