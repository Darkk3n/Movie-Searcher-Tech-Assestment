import "./App.css";

import responseMovies from "./mocks/with-results.json";

function App() {
	const movies = responseMovies.Search;
	const hasMovies = movies?.length > 0;
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
				{hasMovies ? (
					<ul>
						{movies.map((m) => (
							<li key={m.imdbID}>
								<h3>{m.Title}</h3>
								<p>{m.Year}</p>
								<img src={m.Poster} alt={m.Title} />
							</li>
						))}
					</ul>
				) : (
					<p>No movies found</p>
				)}
			</main>
		</div>
	);
}

export default App;
