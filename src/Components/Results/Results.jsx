import axios from '../../axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import './Results.css'
import FlipMovie from 'react-flip-move';
function Results({ selectedOption }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption])
    return (
        <div className='results'>
            <FlipMovie>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMovie>
        </div>
    )
}

export default Results
