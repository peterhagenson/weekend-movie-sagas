import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

function EditMovie() {

    let params = useParams();

    const history = useHistory();
    const dispatch = useDispatch();

    const [newTitle, setNewTitle] = useState(' ');
    const [newDescription, setNewDescription] = useState(' ');

    const detailMovie = useSelector(store => store.detailMovie)


    const editMovie = (event) => {
        console.log('New title:', newTitle, ' New description:', newDescription, "id:", params.id);
        dispatch({
            type: "EDIT_MOVIE",
            payload: {
                newTitle: newTitle,
                newDescription: newDescription,
                id: params.id
            }
        })
        history.push(`/details/${params.id}`)
    }

    const cancelEdit = () => {
        history.push(`/details/${params.id}`)
    }

    return (
        <Router>
            <Route path="/editMovie/:id">
                <ThemeProvider theme={theme}>
                    <Card sx={{ width: 700, borderRadius: '16px' }} variant="outlined" className="detailCard">
                        <CardContent>
                            <>
                                <div>
                                    <h3>Edit Movie</h3>
                                </div>
                                <form onSubmit={editMovie}>
                                    <div>
                                        <TextField onChange={(event) => (setNewTitle(event.target.value))} fullWidth placeholder="new title" size="small" />
                                    </div>
                                    <div>
                                        <TextField onChange={(event) => (setNewDescription(event.target.value))} fullWidth multiline minRows={4}
                                            maxRows={10} sx={{ mt: 2 }} placeholder="new description" size="small" />
                                    </div>
                                    {/* needs to set variables and go to details page */}


                                </form>
                            </>
                        </CardContent>
                    </Card >
                    <div>
                        <Button type="submit" sx={{ mr: 1, mt: 2 }} variant="outlined">Save</Button>
                        {/* needs to empty variables and go do details page */}
                        <Button onClick={cancelEdit} sx={{ ml: 1, mt: 2 }} variant="outlined">Cancel</Button>
                    </div>
                </ThemeProvider>
            </Route>
        </Router>
    )

}

export default EditMovie 