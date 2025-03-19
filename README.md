# Handlebars Translator for Iterable

A simple web tool that helps generate Handlebars templates for Iterable custom variables. This tool is specifically designed to work with triple-colon formatted variables (e.g., `LFC:::variable_name`, `mops:::status`, etc.).

## Features

- Easy-to-use interface for creating conditional Handlebars templates
- Support for any prefix with triple-colon format
- Live template testing
- Click-to-use examples
- Error handling and validation

## Usage

1. Enter your variable (e.g., `LFC:::am_name`)
2. Enter the value to check against (e.g., `Premium`)
3. Enter the result text to show when condition is met
4. Click "Translate" to generate the Handlebars template
5. Use the test section to verify your template works as expected

## Examples

- Check user type:
  - Variable: `LFC:::am_name`
  - Value: `Premium`
  - Result: `Welcome back, Premium member!`

- Check subscription status:
  - Variable: `mops:::subscription_status`
  - Value: `active`
  - Result: `Your subscription is active`

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Start creating templates!

## License

MIT