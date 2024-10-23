export interface SanityImage {
  _type: string;
  asset: SanityImageAsset;
  caption: string;
  attribution: string;
  crop: SanityImageCrop;
  hotspot: SanityImageHotspot;
  alt?: string;
}

export interface SanityImageAsset {
  _type: string;
  _ref: string;
}

export interface SanityImageCrop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface SanityImageHotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}
