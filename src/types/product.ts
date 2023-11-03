export interface Product {
	name: string;
	price: Array<{ pieces: '6-8' | '10-12'; amount: number }>;
	content: string;
	allergens: Array<string>;
}
