import { getProducts } from '$lib/sanity';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		products: await getProducts()
	};
}
