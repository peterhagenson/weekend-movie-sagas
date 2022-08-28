import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';

//WILL NEED USE HISTORY TO SEND TO MOVIE DETAIL I THINK

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
            spacing: 4,

        },
        secondary: {
            main: '#ffc107',
        },
    },
});


function MovieList() {

    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const toDetails = (movieId) => {
        console.log(movieId);
        // dispatch({
        //     type: 'FETCH_DETAIL_MOVIE',
        //     payload: movieId
        // })
        // dispatch({
        //     type: 'GENRES',
        //     payload: movieId
        // })
        history.push(`/details/${movieId}`)
    }

    const toAddMovie = () => {
        history.push('/addMovie');
    }

    const searchMovies = (event) => {

    }

    return (
        <Router>
            <Route path="/" exact>
                <ThemeProvider theme={theme}>
                    <main>

                        <Button onClick={toAddMovie} variant="outlined">Add Movie</Button>

                        <form onSubmit={searchMovies}>
                            <div>
                                <input onChange={(event) => (setSearchTerm(event.target.value))} placeholder="movie title"></input>
                                <Button type="submit" variant="outlined">Search</Button>
                            </div>
                        </form>

                        <h1>Browse Movies</h1>

                        <section className="movies">
                            {movies.map(movie => {
                                return (
                                    <Card sx={{ width: 200, borderRadius: '16px' }} variant="outlined" className="listCard">

                                        <CardContent >
                                            <div key={movie.id} >
                                                <h3>{movie.title}</h3>
                                                <img className="listPoster" src={movie.poster} alt={movie.title} onClick={() => toDetails(movie.id)} />

                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </section>
                    </main >
                </ThemeProvider>
            </Route>
        </Router >
    );

}

export default MovieList;