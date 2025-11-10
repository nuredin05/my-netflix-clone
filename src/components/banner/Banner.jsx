import React, { useEffect, useState } from 'react';
import Request from '../../link/request'
import axios from '../../link/axios';
import '../banner/banner.css'

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
const Banner = () => {
    const[movie,setMovie]=useState({});
    useEffect(()=>{
        (async()=>{
            try{
                
                const request =await axios.get(Request.fetchNetflixOriginal)
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);

                console.log(request)
            }catch(error){
                console.log('error',error);
            };
        })()
        },
    []);
  return (
    <div className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:'clearInterval', 
        backgroundRepeat:'no-repeat'}}
        >
          
            <div className='banner-contents'>
                 <h1 className='banner-Title'>
                       {movie.title||movie.name||movie.original_name}
                      
                  </h1>
                  
                 <div className='banner-buttons'>
                 <button className='banner-buttons play'>play</button>
                 <button className='banner-buttons list'>my-list</button>
            </div>
            <h1 className='banner-description'>
                       {truncate(movie?.overview,150)}
                  </h1>
            </div>
            <div className='banner-fade-button'></div>
    </div>

  );    
};

export default Banner;
