/* horseman-config enable-openai */

/**
 * This is a simple example of using the raw text content with a prompt.
*/

/* Fetch the raw text */
const html = document.body.innerText

/* Ask gpt-3.5-turbo to generate a new description */
return {
    prompt: \`Do something with the following text: \${ html } \`
}