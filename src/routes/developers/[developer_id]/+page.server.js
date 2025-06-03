import devService from '$lib/server/developer.js';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const developer = await devService.getDeveloperById(params.developer_id);
	if (!developer) {
		throw error(404, 'Entwickler nicht gefunden');
	}
	return { developer };
}
