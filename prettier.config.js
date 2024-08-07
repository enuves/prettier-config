// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  $schema: "http://json.schemastore.org/prettierrc",
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "auto",
  semi: true,
  singleQuote: false,
  printWidth: 100,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: "*.md",
      options: {
        parser: "mdx",
      },
    },
  ],
};

module.export = config;
