import React from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons'

const baseUrl = "https://image.tmdb.org/t/p/original/"

function VideoCard({ movie }) {
    return (
        <div className='videoCard'>
            <div className="imgContainer">
                <img src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
            </div>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                // textTruncateChild={<a href="#">Read more</a>}
                text={movie.overview} />
            <h2>{movie.title}</h2>
            <p className='videoCard_Stats'>
                {movie.media_type && `${movie.media_type} :`}
                {movie.release_date || movie.first_air_date}
                <span>{` - `}</span>
                <ThumbUpSharp />{movie.vote_count}</p>
        </div>
    )
}

export default VideoCard
