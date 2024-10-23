import type { SanityImage } from './sanity';

export interface Gallery {
  name: string;
  portraitImageLeft: SanityImage;
  portraitImageRight: SanityImage;
  bigPortraitImage: SanityImage;
  squareImage: SanityImage;
  landscapeImage: SanityImage;
}
