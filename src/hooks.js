async function getLanguageDictionary(headers) {
	const lang = headers['accept-language']?.substr?.(0, 2) ?? 'en';
	try {
		return (await import(`./lang/${lang}.json`)).default;
	} catch (error) {
		return (await import(`./lang/en.json`)).default;
	}
}

export async function handle({ request, resolve }) {
	request.locals.languageDictionary = await getLanguageDictionary(request.headers);

	return await resolve(request);
}

export function getSession({ locals }) {
	return {
		languageDictionary: locals.languageDictionary
	};
}
