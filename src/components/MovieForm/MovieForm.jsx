import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function MovieForm() {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [description, setDescription] = useState('');

    const addNewMovie = () => {
        console.log(title, genre, posterUrl, description)
        dispatch
    }




    return (
        <Router>
            <Route path="/addMovie">
                <form onSubmit={addNewMovie}>
                    <input onChange={(event) => (setTitle(event.target.value))} placeholder="movie title"></input>
                    <select onChange={(event) => (setGenre(event.target.value))} placeholder="movie genre" id="genre">

                        <option value="genre"></option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animated">Animated</option>
                        <option value="Biographical">Biographical</option>
                        <option value="Comedy">Comedy</option>
                        <option value="meme">Disaster</option>
                        <option value="Adventure">Drama</option>
                        <option value="Animated">Epic</option>
                        <option value="Biographical">Fantasy</option>
                        <option value="Comedy">Musical</option>
                        <option value="meme">Romantic</option>
                        <option value="Biographical">Science Fiction</option>
                        <option value="Comedy">Space-Opera</option>
                        <option value="meme">Superhero</option>
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