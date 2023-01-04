const { ESLint } = require("eslint");

describe("basic", () => {
  it("should report semicolon errors", async () => {
    const cli = new ESLint({
      useEslintrc: true,
    });
    const results = await cli.lintFiles([require.resolve("./bad.ts")]);
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
