import { getGallery } from '$lib/sanity';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		gallery: await getGallery()
	};
}
