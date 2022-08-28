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

                                <form onSubmit={editMovie}>
                                    <div>
                                        <input onChange={(event) => (setNewTitle(event.target.value))} placeholder="new title"></input>
                                    </div>
                                    <div>
                                        <textarea onChange={(event) => (setNewDescription(event.target.value))} placeholder="new description"></textarea>
                                    </div>
                                    {/* needs to set variables and go to details page */}
                                    <div>
                                        <Button type="submit" variant="outlined">Save</Button>
                                        {/* needs to empty variables and go do details page */}
                                        <Button onClick={cancelEdit} variant="outlined">Cancel</Button>
                                    </div>

                                </form>
                            </>
                        </CardContent>
                    </Card >
                </ThemeProvider>
            </Route>
        </Router>
    )

}

export default EditMovie 