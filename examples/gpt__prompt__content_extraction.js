/* horseman-config enable-openai, enable-external */

/**
 * This is an example of intelligently extracting the text content from a page
 * (with readability.js) and using it with a prompt.
*/

/* Import the readability content extraction package from skypsack */
const pkg = (await import('https://cdn.skypack.dev/@mozilla/readability')).default

/* Create a clone of the document for readability to modify */
const documentClone = document.cloneNode(true);
  
/* Remove any elements from the clone that we definitely don't want to extract content from */
['header', 'footer', 'nav'].forEach(selector => {
  documentClone.querySelectorAll(selector).forEach(element => { element.remove() })
})

/* Extract the page content from the clone using readability */
const content = (new pkg.Readability(documentClone).parse()).textContent

/* Ask gpt-3.5-turbo to summarize the content */
return {
  prompt: `Summarize the following content: ${ content }`
}