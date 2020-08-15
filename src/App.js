import React, { useState } from 'react';
import Movies from './components/Movies/Movies';
import './App.css';

function App() {
	const [movies, setMovies] = useState([
		{
		  id: "4365",
		  title: "Le Roi",
		  date: "24 septembre 2019",
		  category: "Drame historique",
		  resume:
			"Dans l'Angleterre du 15e siècle, Hal, un prince capricieux et bon à rien, devient un roi puissant lorsqu'il hérite à contrec?ur du trône et de ses conflits",
		  like: false,
		  nbLike: 18,
		  comment: 3,
		  bookmark: false,
		  trailer: "https://www.youtube.com/watch?v=bVH7LurFHHc",
		  image: "images/the-king.jpg"
		},
		{
		  id: "5307",
		  title: "Joker",
		  date: "09 Octobre 2019",
		  category: "Drame / Thriller",
		  resume:
			"A Gotham City, Arthur Fleck, un comédien de stand-up raté. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
		  like: false,
		  nbLike: 7,
		  comment: 1,
		  bookmark: false,
		  trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
		  image: "images/joker.jpg"
		},
		{
		  id: "6798",
		  title: "Docteur Sleep",
		  date: "30 Octobre 2019",
		  category: "Fantasy / Thriller",
		  resume:
			"Suite de Shining dans laquelle Danny, devenu adulte, est encore traumatisé et souffre de problèmes d'alcoolisme et de gestion de la colère. Comme son père.",
		  like: false,
		  nbLike: 10,
		  comment: 6,
		  bookmark: false,
		  trailer: "https://www.youtube.com/watch?v=BOzFZxB-8cw",
		  image: "images/docteur-sleep.jpg"
		},
		{
		  id: "6742",
		  title: "Once Upon a Time...",
		  date: " 14 août 2019",
		  category: "Drame / comédie",
		  resume:
			"En 1969, la star de télévision Rick Dalton et le cascadeur Cliff Booth, sa doublure de longue date, poursuivent leurs carrières au sein d’une industrie qu’ils ne reconnaissent plus.",
		  like: false,
		  nbLike: 12,
		  comment: 6,
		  bookmark: false,
		  trailer: "https://www.youtube.com/watch?v=ELeMaP8EPAA",
		  image: "images/once-upon.png"
		}
	  ]);

	const onToggleBookmark = (e, movie_id) => {
		e.preventDefault();
		setMovies(
			movies.map((movie) => {
				if (movie.id === movie_id) {
					movie.bookmark = !movie.bookmark;
				}
				return movie;
			})
		);
	};

	const onToggleLike = (e, movie_id) => {
		e.preventDefault();
		setMovies(
			movies.map((movie) => {
				if (movie.id === movie_id) {
					movie.nbLike += movie.like ? -1 : 1;
					movie.like = !movie.like;
				}
				return movie;
			})
		);
	};

	return <Movies movies={movies} onToggleLike={onToggleLike} onToggleBookmark={onToggleBookmark} />;
}

export default App;
