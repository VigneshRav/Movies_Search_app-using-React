import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onFavoriteChange={loadFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
}
