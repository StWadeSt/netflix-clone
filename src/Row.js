import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

const base_image_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);//if this bracket is empty this useEffect wil only run once.

    console.log(movies);

    return (
        <div className="row">
            {/*Title */}
            <h2>{title}</h2>

            <div className="row__movies">
                {/*Displays all the movies in the row */}
                {movies.map(movie =>(
                    <img
                    
                    src={`${base_image_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

            {/*Contaier/Poster */}
            {/*Title */}
        </div>
    )
}

export default Row
