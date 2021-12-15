# svelte-tailwind-boilerplate

### Code

A svelte kit boilerplate using tailwind css with eslint / prettier / airbnb formatting and styling. It supports netlify as a backend. It is also meant to support multiple page websites and PWAs. Supports i18n. Supports dark mode. Set up to use svg icons; currently using hero icons.

### Setup

`npm i`

Replace APP NAME, APP SHORT NAME, APP DESCRIPTION, AUTHOR NAME, APP URL, and KEYWORDs

Replace #FFFFFF with your app's primary color

Replace static/img/icons/icon.svg with your icon, delete all other icons, then run `npm run generate-assets`

`npm run dev`

##### Styling:

VS Code Extensions:

- Auto Rename Tag

- ESLint

- Path Intellisense

- PostCSS Language Support

- Prettier

- Svelte 3 Snippets

- Svelte for VS Code

- Tailwind CSS Intellisense

- Tailwind Docs

Set up VS code to auto format on save

1. Open preferences (ctrl+shift+P)

2. Preferences: Open Settings (JSON)

3. Add the following:

```json
{
	"prettier.singleQuote": true,
	"prettier.tabWidth": 4,
	"prettier.useTabs": true,
	"editor.formatOnSave": true,
	"[html]": {
		"editor.defaultFormatter": "vscode.html-language-features"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[svelte]": {
		"editor.defaultFormatter": "svelte.svelte-vscode"
	},
	"eslint.alwaysShowStatus": true
}
```

### Testing This Template

Test by setting up as mentioned above

Test `npm run build` then `npm run preview`

Test deployment to Netlify

Test language translation implementation

Test PWA, auto update, and offline abilities

### Development

First time setup: `npm i`

Generate Assets: `npm run generate-assets`

Development: `npm run dev`

Build: `npm run build`

Preview: `npm run preview`
