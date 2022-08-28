import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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

        if (posterUrl.length && title.length) {


            dispatch({
                type: 'ADD_MOVIE',
                payload: {
                    title: title,
                    genre_id: genre,
                    poster: posterUrl,
                    description: description
                }
            })
        }
        history.push('/');

    }

    const backToList = () => {
        history.push('/')
    }




    return (
        <Router>
            <Route path="/addMovie">
                <ThemeProvider theme={theme}>
                    <form onSubmit={() => addNewMovie()}>
                        <Card sx={{ width: 700, borderRadius: '16px', backgroundColor: '#fff8dc' }} variant="outlined" className="detailCard">
                            <CardContent>



                                {/* <input onChange={setGenre}></input> */}
                                <div>
                                    <TextField onChange={(event) => (setTitle(event.target.value))} size="small" fullWidth label="title" placeholder="movie title" />
                                </div>
                                <div>
                                    <Select onChange={(event) => (setGenre(event.target.value))} autoWidth label="genre" fullWidth sx={{ minWidth: 185, mt: 2 }} size="small" id="genre" value={genre}>


                                        <MenuItem id="1" value={1}>Adventure</MenuItem>
                                        <MenuItem id="2" value={2}>Animated</MenuItem>
                                        <MenuItem id="3" value={3}>Biographical</MenuItem>
                                        <MenuItem id="4" value={4}>Comedy</MenuItem>
                                        <MenuItem id="5" value={5}>Disaster</MenuItem>
                                        <MenuItem id="6" value={6}>Drama</MenuItem>
                                        <MenuItem id="7" value={7}>Epic</MenuItem>
                                        <MenuItem id="8" value={8}>Fantasy</MenuItem>
                                        <MenuItem id="9" value={9}>Musical</MenuItem>
                                        <MenuItem id="10" value={10}>Romantic</MenuItem>
                                        <MenuItem id="11" value={11}>Science Fiction</MenuItem>
                                        <MenuItem id="12" value={12}>Space-Opera</MenuItem>
                                        <MenuItem id="13" value={13}>Superhero</MenuItem>
                                    </Select>
                                </div>
                                <div>
                                    <TextField onChange={(event) => (setPosterUrl(event.target.value))} size="small" fullWidth sx={{ mt: 2 }} label="movie poster url" placeholder="movie poster url" />
                                </div>
                                <div>
                                    <TextField onChange={(event) => (setDescription(event.target.value))} multiline minRows={4}
                                        maxRows={10} fullWidth size="small" sx={{ mt: 2 }} label="movie description" placeholder="movie description" />
                                </div>



                            </CardContent>
                        </Card >

                        <div>
                            <Button type="submit" size="small" sx={{ mr: 1, mt: 2, backgroundColor: '#fff8dc' }} variant="outlined">Submit</Button>
                            <Button variant="outlined" size="small" sx={{ ml: 1, mt: 2, backgroundColor: '#fff8dc' }} onClick={backToList}>Cancel</Button>
                        </div>
                    </form>
                </ThemeProvider>
            </Route >
        </Router >
    )

}

export default MovieForm;