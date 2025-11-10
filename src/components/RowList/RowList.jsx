import React from "react";
import Request from "../../link/request";
import Row from '../Row/Row'

 const RowList = () => {
    return (
<>
        <Row
        title='NETFLIX ORIGINAL'
        fetchURL={Request.fetchNetflixOriginal}
        isLargeRow={true}

        />
        <Row title='Trending Now'
        fetchURL={Request.fetchTrending}/>
        <Row title='Action Movies'
        fetchURL={Request.fetchActionMovies}/>
        <Row title='Top Rated'
        fetchURL={Request.fetchTopRatedMovies}/>
       
</>
    );
}
export default RowList;