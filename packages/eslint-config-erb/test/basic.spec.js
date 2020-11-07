const { CLIEngine } = require("eslint");

describe("basic", () => {
  it("should report semicolon errors", () => {
    const cli = new CLIEngine({
      useEslintrc: true,
    });
    const { results } = cli.executeOnFiles([require.resolve("./bad.ts")]);
    expect(
      results.map((result) =>
        result.messages.map((message) => ({
          ...message,
          filePath: "",
        }))
      )
    ).toMatchSnapshot();
  });
});
