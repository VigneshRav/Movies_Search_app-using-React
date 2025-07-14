import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Service/OmdbAPI";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieDetails(id)
      .then(setMovie)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!movie) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        {movie.Title} ({movie.Year})
      </h1>
      <div className="flex gap-5">
        <div>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            className="my-4 w-76 h-112 max-w-md"
          />
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p>
            <strong>Genre :</strong> {movie.Genre}
          </p>
          <p>
            <strong>Type :</strong> {movie.Type}
          </p>
          <p>
            <strong>Released :</strong> {movie.Released}
          </p>
          <p>
            <strong>Duration :</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Language :</strong> {movie.Language}
          </p>
          <p>
            <strong>Director :</strong> {movie.Director}
          </p>
          <p>
            <strong>Writers :</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors :</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot :</strong> {movie.Plot}
          </p>
          <p>
            <strong>Awards :</strong> {movie.Awards}
          </p>
          <p>
            <strong>IMDB Rating :</strong> {movie.imdbRating}/10
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
