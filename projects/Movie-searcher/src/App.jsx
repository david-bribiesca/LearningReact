
import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
const API_KEY = "5f52bfec"
//const url_example = `https://www.omdbapi.com/?apikey=5f52bfec&s=${movie}`

function App() {
  const {movies} = useMovies()

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
          <Movies movies={movies}/>
        </main>
      </div>
    </>
  )
}

export default App
