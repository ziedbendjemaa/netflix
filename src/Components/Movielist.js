import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({movielist}) => {
    return (
        <div className="container"> 
        <div className="row ml-5">
            {
                movielist.map(movie=><MovieCard movie={movie} key={movie.id}/>)
            }
            </div>
        </div>
    )
}

export default Movielist
