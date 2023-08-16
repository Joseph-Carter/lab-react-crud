import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import { getAllMovies } from "../../api/fetch";

export default function MoviesIndex() {

  const [error, setError] = useState(false)
    const [movie, setMovie] = useState({})

    useEffect(() => {
      getAllMovies(id)
      .then((movieData) => {
        setMovie(movieData)
        setError(false)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
      })
    }, [])


  return (
    <div>
      <p>Movie List</p>;
      {error ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  )
  
}
