import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

// Initial movie data
const initialMovies = [
  {
    title: 'Inception',
    description: 'A mind-bending thriller',
    posterURL: 'https://example.com/inception.jpg',
    rating: 9,
  },
  {
    title: 'The Matrix',
    description: 'A hacker discovers reality is not what it seems',
    posterURL: 'https://example.com/matrix.jpg',
    rating: 8,
  },
  // Add more initial movies if desired
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies); // State for the movie list
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [rating, setRating] = useState(''); // State for the rating filter

  // Filter the movies based on the search term and rating
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (rating ? movie.rating >= rating : true)
    );
  });

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      {/* Filter Component */}
      <Filter setSearchTerm={setSearchTerm} setRating={setRating} />
      {/* MovieList Component */}
      <MovieList movies={filteredMovies} />
      {/* AddMovieForm Component */}
      <AddMovieForm addMovie={addMovie} />
    </div>
  );
};

export default App;
