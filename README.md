# 👋

This repository is for detailed update notes, and for tracking issues and feature requests for the [Horseman](https://gethorseman.app) crawler.

https://github.com/workeffortwaste/horseman/issues

# Horseman v0.3

**tl;dr** 🕷️ *Crawl the web with GPT3.5 and use page content with prompts. 🤖Don't know JS? Create snippets with an AI helper instead. 🌌 Deeper exploration with new the Insights feature. 🤯 Huge number of new snippets and much more.*

## Patch Notes

Let's get the obligatory patch notes out the way. A lot of bugs have been squashed, elements polished, and the edges removed from many cases.

## New Features

With that out the way let’s talk about the big new features in Horseman v0.3.

### OpenAI GPT 3.5 Integration

GPT3.5 has been integrated directly in Horseman in a couple of ways. 👇

### Prompts In Snippets

****************Requires an OpenAI API key (add yours under the main Settings menu).****************

Query GPT with any prompt by returning the new `prompt` property from your snippet. Combine any piece of page data, or send the entire page to GPT for analysis.

Example snippets using page content have been added to the *New* button in the Editor. You’ll also find newly created built-in snippets in the library to rewrite meta descriptions, write missing meta descriptions, and summarize page content.

```jsx
/* horseman-config enable-openai */

/* Generate a beautiful poem from the meta description using GPT */

/* Fetch the meta description */
const meta = document.querySelector('meta[name="description"]')?.getAttribute('content')

/* Skip the snippet if the page doesn't have a meta description */
if (!meta) return

/* Ask gpt-3.5-turbo to generate a poem */
return {
    prompt: `Rewrite the following as a short 160 character poem: ${meta}`
}
```

Further basic examples can be found in the `examples` folder in this repository.

### No-Code AI Helper

****************************Does not require an OpenAI API key.****************************

Don’t know JavaScript? That’s no longer an issue. You’ll find a new button in the Editor, *No-Code AI*, which will use the power of GPT to automatically create simple Horseman snippets from a description.

Entering a brief description such as `the social meta image` will instantly create a snippet fetching and returning the image used for social shares in the open graph data.

## Insights

A fully explorable report showing statistics about the number of failing or passing pages per snippet. *Think of it as your own customisable audit.*

All built in snippets have been updated to support this feature (where it makes sense) and your own snippets can use this feature with ease. Any snippet returning a `pass` / `fail` string (or the new State property) can enable Insights with the new configuration helper or the `enable-insights` directive.

## States

You are now no longer limited to defining a snippet as passing by only returning a `pass` /  `fail` string, with the new state property of the return object you can show the state alongside the data in the results table.

```jsx
/* horseman-config enable-state */

/* Using the new state property to send a fail state if num is more than 1 */
const num = 2

return {
	cell: num
	state: num > 1 ? 'fail' : 'pass'
}
```

## Deeper Explorations

Explore additional data more easily by viewing it per snippet instead of just by page. Hover over the column header for a snippet with explore enabled to find the new option.

What’s more, when in the additional table, hovering over the column headers you’ll then be able to filter the results by unique values.

## Configuration Helper

As the features of Horseman have grown trying to remember all the snippet directives can be a little tricky. A new configuration helper will toggle your `horseman-config` directives with no fuss.

## Updated Chrome

The version of Chromium used for crawling has been updated to v111 for a faster and more robust crawl. *My favourite new addition?* You can now use the `:has` selector in your snippets for more advanced element selection!

## More Data Types

Automatically split up CSV strings into tags with the new `data-type-tag`.

Visualise colours directly in your crawl with `data-type-color` return any valid CSS colour value and render it as a coloured tag in the results table.

## New Snippets

*Over 40 new snippets have been added to the library!* Including ecommerce snippets which extract product information straight from the DataLayer, AI enhanced snippets to rewrite and analyse content, cookie consent platform discovery, and much more.

## Updated Website

I've given the website a small refresh as the tool get much closer to v1.0, check it out and download the latest version now. https://gethorseman.app/