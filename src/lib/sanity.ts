import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Gallery, Product, ThemePage } from '../types/sanity.types';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = createClient({
  projectId: '4nos8q8u',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getMovies() {
  return await client.fetch('*[_type == "movie"]');
}

export async function getMovieImages() {
  return await client.fetch(`
*[_type == 'movie']{
   poster{
     'url': asset->url
  }
}
`);
}

export async function getGallery() {
  return (await client.fetch(`*[_type == 'gallery']`)) as Gallery[];
}

const builder = imageUrlBuilder(client);

export function getSanityImageURL(source: SanityImageSource) {
  return builder.image(source);
}

export async function getProducts() {
  return (await client.fetch(`*[_type == 'product']`)) as Product[];
}

export async function getThemePage() {
  return (await client.fetch(`*[_type == 'themePage']`)) as ThemePage;
}
