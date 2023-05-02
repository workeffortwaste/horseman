/* horseman-config enable-openai */

/**
 * This is a simple example of using the content from a single HTML element with a prompt.
*/

/* Fetch the meta description */
const meta = document.querySelector('meta[name="description"]')?.getAttribute('content')

/* Skip the snippet if the page doesn't have a meta description */
if (!meta) return

/* Ask gpt-3.5-turbo to generate a new description */
return {
    prompt: `Rewrite the following as a short 160 character poem: ${ meta }`
}