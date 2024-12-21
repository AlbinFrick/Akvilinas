import { getThemePage } from '$lib/sanity';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		page: await getThemePage()
	};
}
