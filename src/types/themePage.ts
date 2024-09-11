import type { SanityImage } from './sanity';
export interface ThemePage {
	title: string;
	description: string;
	image: SanityImage;
	size: Size;
	decoration: Decoration;
	flavour: Array<Flavour>;
}

export interface Size {
	title: string;
	description: string;
	pricesmall: number;
	pricebig: number;
}

export interface Decoration {
		title: string;
		description: string;
		base: {
			description: string;
			images: Array<SanityImage>;
		};
		figures: Array<{
			title: string;
			description: string;
			images: Array<SanityImage>;
		}>;
		other: {
			description: string;
			images: Array<SanityImage>;
		};
}

export interface Flavour {
	title: string;
	flavour: string;
}