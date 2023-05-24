import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
	const { movies: mappedMovies } = useMovies();
	return (
		<div className="page">
			<header>
				<h1>Movie Searcher</h1>
				<form className="form">
					<input placeholder="Avengers, Star Wars, The Matrix..." />
					<button type="submit">Search</button>
				</form>
			</header>
			<main>
				<Movies movies={mappedMovies} />
			</main>
		</div>
	);
}

export default App;
