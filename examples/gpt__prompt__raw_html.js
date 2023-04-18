/* horseman-config enable-openai */

/**
 * This is a simple example of using the raw HTML content with a prompt.
*/

/* Fetch the raw HTML */
const html = document.documentElement.outerHTML

/* Ask gpt-3.5-turbo to generate a new description */
return {
    prompt: \`Do something with the following HTML: \${ html } \`
}