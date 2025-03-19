# Handlebars Translator

A simple web tool that helps generate Handlebars templates for Iterable custom variables. This tool is specifically designed to work with triple-colon formatted variables (e.g., `LFC:::variable_name`, `mops:::variable_name`, etc.).

## Features

- Clean, intuitive interface with organized input sections
- Support for multiple comparison types:
  - Equals (eq)
  - Greater than (gt)
  - Greater than or equal (gte)
  - Less than (lt)
  - Less than or equal (lte)
  - Regex match (ifMatchesRegexStr)
  - Contains text (ifContainsStr)
  - Truthy check (if)
- Support for multiple data types:
  - Text strings
  - Numbers (integers and decimals)
  - Booleans (true/false)
  - Regular expressions
- Optional else conditions
  - Add alternate text for when condition is not met
  - Can be left empty for null output
- Interactive example table with common use cases
- One-click copy functionality
- Live template testing
- Comprehensive error handling and validation

## Usage

1. Select your comparison type from the dropdown
2. Enter your condition details:
   - Variable name (e.g., `LFC:::variable_name`)
   - Value to compare against (if applicable)
   - Result text to show when condition is met
   - Optional else text to show when condition is not met

3. Click "Translate" to generate the Handlebars template
4. Use the "Copy" button to copy the template to your clipboard
5. Test your template using the test section below

## Example Use Cases

### String Equality
```handlebars
{{#eq LFC:::subscription_type "premium"}}
    Welcome Premium member!
{{else}}
    Upgrade to Premium today!
{{/eq}}
```

### Age Verification
```handlebars
{{#gte mops:::user_age 21}}
    You can access all content
{{else}}
    Age restricted content
{{/gte}}
```

### Email Domain Check
```handlebars
{{#ifMatchesRegexStr hyperloop:::email ".*@gmail\.com"}}
    Gmail user detected!
{{/ifMatchesRegexStr}}
```

### Interest Targeting
```handlebars
{{#ifContainsStr LFC:::interests "sports"}}
    Check out our sports content!
{{else}}
    Discover our sports section
{{/ifContainsStr}}
```

## Tips

- Variables should include a prefix with triple colons (e.g., `LFC:::variable_name`, `mops:::variable_name`)
- To display another custom variable in your result text, surround the variable name with curly brackets (e.g., `{{LFC:::am_name}}`)
- The else condition is optional - leave it empty if you don't want any output when the condition is not met
- Values are automatically detected as strings, numbers, or booleans - no need for special formatting
- Use the example table for quick access to common patterns and use cases

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Start creating templates!

## Recent Updates

- Reorganized input section with a cleaner, more intuitive layout
- Converted examples to a table format for better readability
- Reordered comparator dropdown to group similar operations together
- Added visual separators between input sections
- Improved error messages and validation feedback
- Enhanced mobile responsiveness

## License

MIT