export const get = async function (request) {
	const id = request.params.id;
	const url = `https://api.themoviedb.org/3/tv/popular?api_key=2dc1a3f5923224ebac1f054d5be0bb40&language=en-US&page=${id}`;
	const res = await fetch(url);
	const data = await res.json();

	return {
		status: 200,
		body: data
	};
};
