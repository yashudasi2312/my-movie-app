import "../CSS/Card.css"
import { useMovieContext } from "../Contexts/MovieContext"

function MovieCard({movie}){

    const {isFav , addToFav , removeFromFav} = useMovieContext()
    const favorite = isFav(movie.id); 



    function onheart(e){
        e.preventDefault();

        if(favorite) removeFromFav(movie.id)
        else addToFav(movie)
    }


    return(
        <div className="moviecard">
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movieoverlay">
                    <button className={`favbtn ${favorite ? "active" : ""}`} onClick={onheart}>♥</button>
                </div>
            </div>
            <div className="movieinfo">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )

   
}


export default MovieCard