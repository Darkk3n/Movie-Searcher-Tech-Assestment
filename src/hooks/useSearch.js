import { useEffect, useRef, useState } from "react";

export function useSearch() {
   const [query, setQuery] = useState("");
   const [error, setError] = useState(null);
   const isFirstRender = useRef(true);
   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = query === "";
         return;
      }
      if (query === "") {
         setError("Cannot look for an empty movie");
         return;
      }
      if (query.match("/^d+$/")) {
         setError("Cannot look for amovie that starts with a number");
         return;
      }
      if (query.length < 3) {
         setError("Type at least 3 characters");
         return;
      }
      setError(null);
   }, [query]);
   return { query, setQuery, error };
}