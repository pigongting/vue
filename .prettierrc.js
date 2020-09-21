/**
 * https://prettier.io/
 *
 * 最佳实践
 * Prettier 用于代码风格问题
 * linters 用于代码质量问题，但是 linters 也包含代码风格规则，而且可能与 Prettier 冲突
 *
 * 你可能需要使用下列来关闭与 Prettier 冲突的规则
 * eslint-config-prettier
 * tslint-config-prettier
 * stylelint-config-prettier
 *
 */

module.exports = {
  printWidth: 1000,
  // Specify the line length that the printer will wrap on.
  // Default 80

  // Tab Width
  // Specify the number of spaces per indentation-level.
  // Default 2

  // Tabs
  // Indent lines with tabs instead of spaces.
  // Default false

  // Semicolons
  // 分号
  // Print semicolons at the ends of statements.
  // Default true

  quotes: true,
  // Quotes
  // 引号
  // Use single quotes instead of double quotes.
  // Default false

  // Quote Props
  // Change when properties in objects are quoted.
  // Default "as-needed"
  // Options "as-needed" "consistent" "preserve"

  // JSX Quotes
  // Use single quotes instead of double quotes in JSX
  // Default false

  // Trailing Commas
  // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  // Default "es5"
  // Options "es5" "none" "all"

  // Bracket Spacing
  // Print spaces between brackets in object literals.
  // Default treu

  // JSX Brackets
  // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  // Default false

  // Arrow Function Parentheses
  // Include parentheses around a sole arrow function parameter.
  // Default "always"
  // Options "always" "avoid"

  // Range
  // Format only a segment of a file.
  // Default 0 Infinity

  // Parser
  // Specify which parser to use.
  // Default None

  // File Path
  // Specify the file name to use to infer which parser to use.
  // Default None

  // Require Pragma
  // Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to prettier.
  // Default false

  // Insert Pragma
  // Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier. This works well when used in tandem with the --require-pragma option. If there is already a docblock at the top of the file then this option will add a newline to it with the @format marker.
  // Default false

  // Prose Wrap
  // By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out with "never".
  // Default "preserve"
  // Options "always" "never" "preserve"

  // HTML Whitespace Sensitivity
  // Specify the global whitespace sensitivity for HTML files, see whitespace-sensitive formatting for more info.
  // Default "css"
  // Options "css" "strict" "ignore"

  // Vue files script and style tags indentation
  // Whether or not to indent the code inside <script> and <style> tags in Vue files. Some people (like the creator of Vue) don’t indent to save an indentation level, but this might break code folding in your editor.
  // Default false

  // End of Line
  //
  // Default "lf"
  // Options "lf" "crlf" "cr" "auto"

  // Embedded Language Formatting
  // Control whether Prettier formats quoted code embedded in the file.
  // Default "auto"
  // Options "auto" "off"
};
