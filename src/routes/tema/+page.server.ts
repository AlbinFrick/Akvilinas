import { getThemePage } from '$lib/sanity';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	throw redirect(303, '/');
	return {
		page: await getThemePage()
	};
}
