import { useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
	const { query, setQuery, error } = useSearch();
	const { movies, getMovies, loading } = useMovies({ query });
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		getMovies();
	};
	const handleChange = (event) => {
		setQuery(event.target.value);
	};

	return (
		<div className="page">
			<header>
				<h1>Movie Searcher</h1>
				<form className="form" onSubmit={handleSubmit}>
					<input
						name="query"
						ref={inputRef}
						value={query}
						onChange={handleChange}
						placeholder="Avengers, Star Wars, The Matrix..."
					/>
					<button type="submit">Search</button>
				</form>
				{error && <p style={{ color: "red" }}>{error}</p>}
			</header>
			<main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
		</div>
	);
}

export default App;
