import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_image_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);//if this bracket is empty this useEffect wil only run once.

    return (
        <div className="row"> {/*Container*/}
            {/*Title */}
            <h2>{title}</h2>

            <div className="row__movies">
                {/*Displays all the movies in the row */}
                {movies.map(movie =>(
                    <img 
                        key={movie.id}
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
