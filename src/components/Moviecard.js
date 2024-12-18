import React from "react";
import "../styles.css";

export default function MovieCard({movie, isWatclisted, toggleWatchlist}){
    
    function handleError(e){
       return (e.target.src="images/default.jpg")
    }
    
    const handleRating = (rating) => {
        if (rating > 8) return ('rating-good')
        else if (rating >= 5 && rating < 8) return ('rating-ok')
        return ('rating-bad')
    }
    
    
    
    
    return(
        <div key={movie.id} className="movie-card" >

        <img src={`${process.env.PUBLIC_URL}/images/${movie.image}`} alt={movie.title} onError={handleError}/>

        <div className="movie-card-info">
            <h3 className="movie-card-title" >{movie.title}</h3>
            <div>
            <span className="movie-card-genre">{movie.genre}</span>
            <span className={`movie-card-rating ${handleRating(movie.rating)}`}>{movie.rating}</span>
            
            <label className="switch">
                <input type="checkbox" checked={isWatclisted} onChange={() => toggleWatchlist(movie.id)}></input>

                <span className="slider" >
                    <span className="slider-label">{isWatclisted ? "In Watchlist" : "Add to watchlist"} </span>
                </span>
            </label>
            </div>
        </div>
    </div> 
    )
}