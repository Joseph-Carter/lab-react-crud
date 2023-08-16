import ErrorMessage from "../errors/ErrorMessage";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {getOneMovie, destroyMovie} from "../../api/fetch"


const Movie = () => {

    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);

    const { id }= useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneMovie(id)
        .then((movieData) => {
            setMovie(movieData)
            Object.keys(movieData).length ? setError(true) : setError(false)
        })
        .catch((err) => {
            console.error(err)
            setError(true)
        })
    },[id])

    function handleDelete(id) {
        destroyMovie(id)
        .then(() => {
            alert('Show has been removed, rerouting to the list of movies.')
            navigate("/movies")
        })
    }
    return (
        <section className="movies-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="movies-movie">
        {error ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Movie;
