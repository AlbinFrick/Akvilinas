import type { SanityImage } from './sanity';
export interface ThemePage {
	title: string;
	description: string;
	image: SanityImage;
	size: Size;
	decoration: Decoration;
	tasteMenu: Array<Flavour>;
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
	figures: Array<Figure>;
	other: {
		description: string;
		images: Array<SanityImage>;
	};
}

export interface Figure {
	title: string;
	description: string;
	images: Array<SanityImage>;
	price: number | undefined;
}

export interface Flavour {
	title: string;
	smaker: string;
}
