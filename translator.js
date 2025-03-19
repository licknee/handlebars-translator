class HandlebarsTranslator {
    translate(input) {
        // Remove any extra whitespace and convert to lowercase for consistent parsing
        input = input.trim().toLowerCase();
        
        // Match the pattern: "if variable_name is value then show result"
        const ifPattern = /^if\s+(\w+)\s+is\s+(.+?)\s+then\s+show\s+(.+)$/i;
        const match = input.match(ifPattern);
        
        if (match) {
            const [_, variable, condition, result] = match;
            // Create Handlebars template
            return `{{#if (eq ${variable} "${condition}")}}
    ${result}
{{/if}}`;
        }
        
        return "Invalid input format. Please use: 'if variable is value then show result'";
    }

    // Helper method to generate a complete template with multiple conditions
    generateTemplate(inputs) {
        if (!Array.isArray(inputs)) {
            inputs = [inputs];
        }

        const conditions = inputs.map(input => this.translate(input)).join('\n\n');
        
        return `{{!-- Handlebars Template --}}
${conditions}

{{!-- Helper Registration --}}
{{!-- 
    // In your JavaScript:
    Handlebars.registerHelper('eq', function(a, b) {
        return a === b;
    });
--}}`;
    }
}

// Example usage
const translator = new HandlebarsTranslator();

// Test cases
const testCases = [
    "if user_type is admin then show Admin Panel",
    "if status is active then show Online",
    "if temperature is hot then show Warning: High Temperature"
];

console.log("=== Handlebars Translator ===\n");
testCases.forEach(test => {
    console.log("Input:", test);
    console.log("Output:", translator.translate(test));
    console.log();
});

console.log("=== Complete Template ===\n");
console.log(translator.generateTemplate(testCases));