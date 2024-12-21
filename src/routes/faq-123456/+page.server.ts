import { getMovieImages, getMovies } from '$lib/sanity';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const images = await getMovieImages();
	images.map((image) => {
		console.log(image.poster.url);
	});
	return {
		movies: await getMovies(),
		images: await getMovieImages()
	};
}
