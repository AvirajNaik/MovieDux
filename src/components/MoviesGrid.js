import React, {useState} from "react";
import "../styles.css";
import MovieCard  from "./Moviecard";

export default function MoviesGrid({movies, watchlist, toggleWatchlist}){
 
   
    const [searchMovie, setSearchMovie] = useState('');
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");




function moviesearchhandler(e) {
    setSearchMovie (e.target.value)
}

function handleGenre(e){
    setGenre(e.target.value)
}

function handleRating(e){
    setRating(e.target.value)
}


const matchesGenre = (movie, genre) =>{
    return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
}


const matchSearch = (movie, searchMovie) =>{
   return  movie.title.toLowerCase().includes(searchMovie.toLowerCase())
}

const matchRating = (movie, rating) =>{
    switch(rating){
        case "All": return true;

        case "Good": return movie.rating >8;

        case "Ok": return movie.rating >=5 && movie.rating < 8;

        case "Bad": return movie.rating <5;
        default: return false;
    }
}
const filterMovie = movies.filter((movie) => {
    return  matchesGenre(movie, genre) && matchRating(movie, rating) && matchSearch(movie, searchMovie);
}
);

    return (
        <div>
    <input type="text" 
           placeholder="Search movie..." 
           className="search-input"  
           value={searchMovie} 
           onChange={moviesearchhandler} />   
          <div className="filter-bar">
            <div className="filter-slot">
            <label>Genre </label>
            <select className="filter-dropdown" value={genre} onChange={handleGenre} >
                <option>All Genres</option>
                <option>Action</option>
                <option>Drama</option>
                <option>Fantasy</option>
                <option>Horror</option>
            </select>
            </div>
            <div className="filter-slot" >
            <label>Rating </label>
            <select className="filter-dropdown" value={rating} onChange={handleRating}>
                <option>All</option>
                <option>Good</option>
                <option>Ok</option>
                <option>Bad</option>
            </select>
            </div>
            </div> 
              
  <div className="movies-grid" >
{
    filterMovie.map((movie) => (
       <MovieCard movie={movie} 
       key={movie.id} 
       toggleWatchlist={toggleWatchlist} 
       isWatclisted={watchlist.includes(movie.id)}
       />
    ))
}
</div>
        </div>
  
)}