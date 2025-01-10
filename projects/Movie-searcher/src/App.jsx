
import './App.css'
import withResults from './mocks/withResults.json'
import noResults from './mocks/noResults.json'

const API_KEY = "5f52bfec"
//const url_example = `https://www.omdbapi.com/?apikey=5f52bfec&s=${movie}`


function App() {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0

  return (
    <>
      <div className="container">
        <header>
          <h1>Search</h1>
          <form action="" className="form">
            <input type="text" placeholder='Avengers, Star Wars...'/>
            <button type='submit'>Buscar</button>
          </form>
        </header>

        <main>
          {hasMovies ? (
              <ul>
                {
                  movies.map(movie=>(
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
          ):
          (
            <p>NO movie found</p>
          )}
        </main>
      </div>
    </>
  )
}

export default App
