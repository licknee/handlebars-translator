# Handlebars Translator

A simple web tool that helps generate Handlebars templates for Iterable custom variables. This tool is specifically designed to work with triple-colon formatted variables (e.g., `LFC:::variable_name`, `mops:::variable_name`, etc.).

## Features

- Easy-to-use interface for creating conditional Handlebars templates
- Support for multiple data types:
  - Text strings
  - Numbers (integers and decimals)
  - Booleans (true/false)
- Optional else conditions
  - Add alternate text for when condition is not met
  - Can be left empty for null output
- One-click copy functionality for easy template copying
- Live template testing
- Click-to-use examples
- Error handling and validation

## Usage

1. Enter your condition details:
   - Variable (e.g., `LFC:::am_name`)
   - Value to check against (text, number, or true/false)
   - Result text to show when condition is met
   - Optional else text to show when condition is not met

2. Click "Translate" to generate the Handlebars template

3. Use the "Copy" button to copy the template to your clipboard

4. Test your template using the test section

## Examples

### String Comparison
- Variable: `LFC:::am_name`
- Value: `Premium`
- Then: `Welcome back, Premium member!`
- Else: (null)

```handlebars
{{#if (eq LFC:::am_name "Premium")}}
    Welcome back, Premium member!
{{/if}}
```

### Number Comparison
- Variable: `mops:::user_age`
- Value: `21`
- Then: `You can access all content`
- Else: `Age restricted content`

```handlebars
{{#if (eq mops:::user_age 21)}}
    You can access all content
{{else}}
    Age restricted content
{{/if}}
```

### Boolean Comparison
- Variable: `hyperloop:::is_active`
- Value: `true`
- Then: `Your account is active`
- Else: (null)

```handlebars
{{#if (eq hyperloop:::is_active true)}}
    Your account is active
{{/if}}
```

## Tips

- Variables in list uploads should include a prefix with triple colons (e.g., `LFC:::variable_name`, `mops:::variable_name`)
- To display another custom variable in your result text, surround the variable name with curly brackets (e.g., `{{LFC:::am_name}}`)
- The else condition is optional - leave it empty if you don't want any output when the condition is not met
- Values are automatically detected as strings, numbers, or booleans - no need for special formatting

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Start creating templates!

## License

MIT