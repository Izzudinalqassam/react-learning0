import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites-container">
        <h2>Favorite Movies</h2>
        <div className="favorites-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
    <h2>No Favorite Movies yet </h2>
      <p>Add some movies to your favorites list and they will appear here</p>
    </div>
  );
}

export default Favorites;
