import MovieCard  from "../Components/Card";
import { use, useEffect, useState } from "react";
import "../CSS/Home.css"
import { searchMovies , getPopularMovies } from "../services/api";

function Home(){
   

    const [searchQuery , setSearchQuery] = useState("")
    const [movies , setMovies] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true)

    useEffect(
        () => {
            const loadPopularMovies = async() => {
                try{
                    const popularMovies = await getPopularMovies()
                    setMovies(popularMovies)
                }catch(e){
                    console.log(e)
                    setError("Failed to load movies...")
                }finally{
                    setLoading(false);
                }
            }

            loadPopularMovies()
        } , []
    )


    const handleSearch = async(e) => {
        e.preventDefault()


        if(!searchQuery.trim()) return;

        if(loading) return;

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }

    }


    return(
        <div className="home">

            <form onSubmit={handleSearch} className="searchform">
            <input
                type="text"
                placeholder="Search for movies..."
                className="searchinput"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="searchbutton">
            Search
            </button>
            </form>

            {error && <div className="errormessage">{error}</div>}


            {
                loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                <div className="moviesgrid">
                    {
                        movies.map(
                            (movie) => 
                                movie.title.toLowerCase().startsWith(searchQuery) && 
                                (
                                <MovieCard movie={movie} key={movie.id}/>
                            )
                        )
                    }
                </div>
                )}
        </div>
    );
}

export default Home