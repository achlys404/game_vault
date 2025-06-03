import devService from '$lib/server/developer.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const page = parseInt(url.searchParams.get('page') || '1');
	return await devService.getDevelopers(page);
}
