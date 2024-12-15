
import './App.css';
import './styles.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MoviesGrid from './components/MoviesGrid.js';
import Watchlist from './components/Watchlist.js';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

function App() {

  const [movies, setMovie] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {

    fetch('movies.json')
    .then(response => response.json())
    .then(data => setMovie(data));
}, []);


  const toggleWatchlist = (movieId) => {
    setWatchlist(prev => prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]);
  }


  return (
    <div className="App">
      <div className="container">
      <Header />
<Router>
  <nav>
    <ul>
      <li> 
      <Link to="/">Home</Link>
      </li>
      <li> 
      <Link to="/watchlist">Watchlist</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
    <Route path="/Watchlist" element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
  </Routes>
</Router>
      
      <Footer />
      </div>
        
    </div>
  );
}

export default App;
