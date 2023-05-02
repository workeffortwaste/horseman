/* horseman-config enable-openai */

/**
 * This is a simple example of using the raw HTML content with a prompt. 
 * Note this will likely cause an error if you're sending the complete HTML.
 * Horseman will attempt to limit the amount of tokens you're sending by truncating
 * your probme but it's not perfect.
*/

/* Fetch the raw HTML */
const html = document.documentElement.outerHTML

/* Ask gpt-3.5-turbo to generate a new description */
return {
    prompt: `Do something with the following HTML: ${ html } `
}