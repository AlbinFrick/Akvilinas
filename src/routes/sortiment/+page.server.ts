import { getGallery } from '$lib/sanity';
import type { gallery } from '../../types/gallery';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		gallery: (await getProducts()) as gallery[]
	};
}
