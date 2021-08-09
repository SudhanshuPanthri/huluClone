import React from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import { forwardRef } from 'react'

const baseUrl = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className='videoCard'>
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
                {/* {movie.media_type && `${movie.media_type} :`} */}
                {`RELEASE DATE : `}
                {movie.release_date || movie.first_air_date}
                {/* <span>{` - `}</span> */}
            </p>
            <p>{`NO. OF LIKES : `}{movie.vote_count}</p>
        </div>
    )
})

export default VideoCard
