import type { SanityImage } from './sanity';
export interface ThemePage {
	title: string;
	description: string;
	image: SanityImage;
	tasteMenu: Array<{ title: string; smaker: string }>;
	image1: SanityImage;
	image2: SanityImage;
	image3: SanityImage;
}
