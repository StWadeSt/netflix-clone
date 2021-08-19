import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_image_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
    const [ movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);//if this bracket is empty this useEffect wil only run once.

    const opts = {
        height: "390",
        wight: "100%",
        playerVars: {
            
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
          trailerUrl? setTrailerUrl("") 
        : movieTrailer(movie?.name || "")
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error))
    };


    return (
        <div className="row"> {/*Container*/}
            {trailerUrl && <YouTube className="trailer" videoId={trailerUrl} opts={opts} />}
            {/*Title */}
            <h2>{title}</h2>

            <div className="row__movies">
                {/*Displays all the movies in the row */}
                {movies.map(movie =>(
                    <img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`movie ${isLarge && "row__movieLarge"}`}
                        src={`${base_image_url}${isLarge? movie.poster_path : movie.backdrop_path }`}
                        alt={movie.name} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
