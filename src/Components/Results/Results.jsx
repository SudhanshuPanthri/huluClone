import axios from '../../axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import './Results.css'
import requests from '../../requests'
function Results() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies)
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [])
    return (
        <div className='results'>
            {movies.map((movie) => (
                <VideoCard movie={movie} />
            ))}
        </div>
    )
}

export default Results
