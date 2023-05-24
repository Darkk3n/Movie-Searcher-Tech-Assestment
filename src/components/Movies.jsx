/* eslint-disable react/prop-types */
export function ListOfMovies({ movies }) {
	return (
		<ul>
			{movies.map((m) => (
				<li key={m.id}>
					<h3>{m.title}</h3>
					<p>{m.pear}</p>
					<img src={m.poster} alt={m.title} />
				</li>
			))}
		</ul>
	);
}

export function NoMoviesResult() {
	return <p>No movies found</p>;
}

export function Movies({ movies }) {
	const hasMovies = movies?.length > 0;
	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
}
