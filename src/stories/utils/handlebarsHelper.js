import Handlebars from 'handlebars';

Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

/**
 * Compiles a Handlebars template with the provided context.
 * 
 * @param {string} templateString - The raw Handlebars template string.
 * @param {object} context - The context data to compile the template with.
 * @returns {string} - The compiled HTML string.
 * @throws Will throw an error if the template compilation fails.
 */
export const compileTemplate = (templateString, context) => {
    try {
        const template = Handlebars.compile(templateString);
        return template(context);
    } catch (error) {
        console.error("Template compilation error:", error);
        throw new Error("Failed to compile template.");
    }
};
