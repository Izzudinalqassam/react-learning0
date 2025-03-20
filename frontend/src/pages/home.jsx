import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        console.log("Fetched movies:", movies);
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  console.log("Current movies state:", movies);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;
    setLoading(true);
    setSearch("");
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Home;
