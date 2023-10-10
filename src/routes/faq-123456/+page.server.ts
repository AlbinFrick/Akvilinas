import { SanityClient, createClient } from '@sanity/client';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
	projectId: '4nos8q8u',
	dataset: 'production',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2023-05-03' // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
async function getMovies(client: SanityClient) {
	return await client.fetch('*[_type == "movie"]');
}

async function getMovieImages(client: SanityClient) {
	return await client.fetch(`
*[_type == 'movie']{
   poster{
     'url': asset->url
  }
}
`);
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const images = await getMovieImages(client);
	images.map((image) => {
		console.log(image.poster.url);
	});
	return {
		movies: await getMovies(client),
		images: await getMovieImages(client)
	};
}
