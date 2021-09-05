import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const reponse = await fetch("https://swapi.dev/api/films/");
      if (!reponse.ok) {
        throw new Error("SAI RUIIIIIII");
      }

      const data = await reponse.json();

      const transformMovies = data.results.map((moviesData) => {
        return {
          id: moviesData.episode_id,
          title: moviesData.title,
          openingText: moviesData.opening_crawl,
          releaseDate: moviesData.release_date,
        };
      });
     
      
      setMovies(transformMovies);
    } catch (error) {
      setError(error.message);
    }
    
    setIsLoading(false);
  },[]);
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);
  
  let content = <p>no movies found.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>LOADINGGGGGGGG</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
