import {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg'

import MovieCard from './component/MovieCard';


const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [movies, setMovies] = useState([]);


  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
          <input type="text" placeholder='search for movies' value='' onChange={() => {}} />
          <img src={SearchIcon} alt="" onClick={() => {}}/>
      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID}/>
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
        
      
      
    </div>
  );
}

export default App;
