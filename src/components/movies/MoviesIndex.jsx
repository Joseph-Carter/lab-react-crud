import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import { getAllMovies } from "../../api/fetch";

export default function MoviesIndex() {

  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
      getAllMovies()
      .then((moviesJson) => {
        setMovies(moviesJson)
        setFilteredMovies(moviesJson)
        setError(false)
      })
      .catch((err) => {
        setError(true)
        console.error(err)
      })
    }, [])

    function handleTextChange(e) {
      setSearchTitle(e.target.value)
      filterMovies(e.target.value)
    }

    function filterMovies(searchValue) {
      const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredMovies(filtered);
    }

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
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {filteredMovies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  )
  
}
