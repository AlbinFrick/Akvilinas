import { getProducts } from '$lib/sanity';
import type { Product } from '../../types/product';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		products: (await getProducts()) as Array<Product>
	};
}
