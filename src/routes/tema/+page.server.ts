import { getThemePage } from '$lib/sanity';
import type { ThemePage } from '../../types/themePage';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		page: (await getThemePage()) as ThemePage
	};
}
