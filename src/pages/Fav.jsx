import "../CSS/Favorites.css"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCard  from "../Components/Card"


function Favorites(){

    const {favorites} = useMovieContext();

    if(favorites){
        return(
            <div>
                <h2>Your Favorites</h2>
                <div className="moviesgrid">
                    {
                        favorites.map(
                            (movie) =>  
                                
                                (
                                <MovieCard movie={movie} key={movie.id}/>
                            )
                        )
                    }
                </div>
            </div>
        )
    }

    return(
        <div className="favempty">
            <h2>No favorite movies yet</h2>
            <p>Start adding movies to your favorites and they will start appearing here</p>
        </div>
    )

}


export default Favorites