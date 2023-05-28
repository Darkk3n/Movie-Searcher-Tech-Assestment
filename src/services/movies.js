const API_KEY = '931ad945'

export const searchMovies = async ({ query }) => {
   if (query === '') return null
   try {
      const res = await fetch(`https://www.omdbapi.com/?apiKey=${API_KEY}&s=${query}`)
      const json = await res.json()
      const movies = json.Search

      return movies?.map((movie) => ({
         id: movie.imdbID,
         title: movie.Title,
         year: movie.Year,
         poster: movie.Poster,
      }));
   } catch (error) {
      throw new Error('Error searching movies')
   }

}