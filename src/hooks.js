async function getLanguageDictionary(headers) {
	const lang = headers['accept-language']?.substr?.(0, 2) ?? 'en';
	try {
		return (await import(`./lang/${lang}.json`)).default;
	} catch (error) {
		return (await import(`./lang/en.json`)).default;
	}
}

const defaultSettings = {
	// overridden in _layout onMount to user device's preference
	darkMode: null
};

export async function handle({ request, resolve }) {
	request.locals.languageDictionary = await getLanguageDictionary(request.headers);
	request.locals.settings = JSON.parse(JSON.stringify(defaultSettings));
	request.locals.defaultSettings = defaultSettings;

	return await resolve(request);
}

export function getSession({ locals }) {
	return {
		languageDictionary: locals.languageDictionary,
		settings: locals.settings,
		defaultSettings: locals.defaultSettings
	};
}
