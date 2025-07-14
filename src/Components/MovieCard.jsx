import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MovieCard({ movie, onFavoriteChange }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFav(favs.some((fav) => fav.imdbID === movie.imdbID));
  }, [movie]);

  const handleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favs.find((fav) => fav.imdbID === movie.imdbID);

    let updatedFavs;
    if (exists) {
      updatedFavs = favs.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavs = [...favs, movie];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
    setIsFav(!exists);
    if (onFavoriteChange) onFavoriteChange(); // tell parent to refresh
  };

  return (
    <div className="border p-3 rounded shadow-sm">
      <img src={movie.Poster} alt={movie.Title} className="h-64 w-full" />
      <h2 className="font-bold mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
      <div className="flex justify-between mt-2 text-sm">
        <Link to={`/movie/${movie.imdbID}`} className="text-blue-600">Details</Link>
        <button onClick={handleFavorite} className="text-green-600 cursor-pointer">
          {isFav ? 'Remove from' : 'Add to'} Favorite
        </button>
      </div>
    </div>
  );
}
