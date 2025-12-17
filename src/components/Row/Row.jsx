import React, { useEffect, useState } from "react";
import './Row.css'
import axios from '../../link/axios'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'

const Row = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState([]);


    const [trailerURL, setTrailerURL] = useState(['']);
    const base_URL = `https://image.tmdb.org/t/p/original/`;


    useEffect(() => {
        (async () => {
            try {

                const requests = await axios.get(fetchURL);
                console.log(requests);

                setMovies(requests.data.results);

            } catch (error) {
                console.log('error', error);
            };
        })()
    },
        [fetchURL]);
    const handleCheck = (movies) => {
        if (trailerURL) {
            setTrailerURL('')
        } else {
            movieTrailer(movies?.title || movies?.name || movies?.original_name)
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    console.log(urlParams.get('v'))
                    setTrailerURL(urlParams.get('v'))
                })
        }
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: { autoplay: 1, },
    }

    return (
        <>
            <div className="row">
                <h1>{title}</h1>
                <div className="row-posters">
                    {movies?.map((item, index) => (
                        <img
                            onClick={() => handleCheck(movies)}
                            key={index} src={`${base_URL}${isLargeRow ? item.poster_path : item.backdrop_path}`} alt={item.name} className={`row_poster ${isLargeRow && 'row_posterLarge'}`} />
                    ))}

                </div>
                <div style={{ padding: '40px' }}> {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}</div>

            </div>

        </>
    );
}
export default Row;