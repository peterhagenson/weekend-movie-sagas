import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function MovieForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    //const movieToAdd = useSelector(store => store.addMovie)

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');


    const addNewMovie = (event) => {
        console.log(title, genre, posterUrl, description)


        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                genre_id: genre,
                poster: posterUrl,
                description: description
            }
        })
        history.push('/');

    }




    return (
        <Router>
            <Route path="/addMovie">
                <form onSubmit={addNewMovie}>
                    <input onChange={(event) => (setTitle(event.target.value))} placeholder="movie title"></input>
                    <select onChange={(event) => (setGenre(event.target.value))} placeholder="movie genre" id="genre">

                        <option value="genre"></option>
                        <option id="1" value="1">Adventure</option>
                        <option id="2" value="2">Animated</option>
                        <option id="3" value="3">Biographical</option>
                        <option id="4" value="4">Comedy</option>
                        <option id="5" value="5">Disaster</option>
                        <option id="6" value="6">Drama</option>
                        <option id="7" value="7">Epic</option>
                        <option id="8" value="8">Fantasy</option>
                        <option id="9" value="9">Musical</option>
                        <option id="10" value="10">Romantic</option>
                        <option id="11" value="11">Science Fiction</option>
                        <option id="12" value="12">Space-Opera</option>
                        <option id="13" value="13">Superhero</option>
                    </select>
                    <input onChange={(event) => (setPosterUrl(event.target.value))} placeholder="movie poster url"></input>
                    <textarea onChange={(event) => (setDescription(event.target.value))} placeholder="movie description"></textarea>
                    <button type="submit">Submit</button>
                    <button>Cancel</button>

                </form>
            </Route>
        </Router>
    )

}

export default MovieForm;