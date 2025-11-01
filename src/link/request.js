// the api must be hide in gitignore 

const API_KEY = '';

const request={
fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomaticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchTvShow: `/discover/movie?api_key=${API_KEY}&with_genres=1`
};
export default request;