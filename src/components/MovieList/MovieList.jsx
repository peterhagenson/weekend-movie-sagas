import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieDetail from '../MovieDetail/MovieDetail'
import { useHistory } from 'react-router-dom'

//WILL NEED USE HISTORY TO SEND TO MOVIE DETAIL I THINK



function MovieList() {

    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const toDetails = (movieId) => {
        console.log(movieId);
        dispatch({
            type: 'FETCH_DETAIL_MOVIE',
            payload: movieId
        })
        dispatch({
            type: 'GENRES',
            payload: movieId
        })
        history.push(`/details/${movieId}`)
    }

    const toAddMovie = () => {
        history.push('/addMovie');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={toAddMovie}>Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => toDetails(movie.id)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;