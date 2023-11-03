import type { SanityImage } from './sanity';
export interface Product {
	name: string;
	price: Array<number>;
	description: string;
	contents: Array<string>;
	image: SanityImage;
	allergens: Array<string>;
}
// price: Array<{ pieces: '6-8' | '10-12'; amount: number }>;
