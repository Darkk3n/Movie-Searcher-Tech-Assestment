import { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ query }) {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const previousSearch = useRef(query)

   const getMovies = async () => {
      if (query === previousSearch.current) return;
      try {
         setLoading(true)
         setError(null)
         previousSearch.current = query
         const newMovies = await searchMovies({ query })
         setMovies(newMovies)
      } catch (error) {
         setError(error.message)
      }
      finally {
         setLoading(false)
      }
   }


   return { movies, getMovies, loading };
}