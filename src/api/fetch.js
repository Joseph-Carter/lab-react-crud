// Shows
const URL = import.meta.env.VITE_BASE_API_URL;
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" }
  return fetch(`${URL}/movies/${id}`, options)
}

// Index/Get all
export function getAllShows() {
  return;
}

// Show/Get one
export function getOneShow(id) {
  return;
}

// Update
export function updateShow(id, movie) {
  }

// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`).then(data => data.json())
}

export function createMovie(movie) {
  return;
}

// Delete
export function destroyMovie(id) {
  return;
}

// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then(data => data.json())
}

// Update
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"},
  }
    return fetch(`${URL}/movies/${id}`, options).then(data => data.json())
}