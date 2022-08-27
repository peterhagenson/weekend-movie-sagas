import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import React from 'react'

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
    }

    const cancelEdit = () => {
        history.push('/details/:id')
    }

    return (
        <Router>
            <Route path="/editMovie/:id">
                <>

                    <form onSubmit={editMovie}>
                        <input onChange={(event) => (setNewTitle(event.target.value))} placeholder="new title"></input>
                        <textarea onChange={(event) => (setNewDescription(event.target.value))} placeholder="new description"></textarea>
                        {/* needs to set variables and go to details page */}
                        <button type="submit">Save</button>
                        {/* needs to empty variables and go do details page */}
                        <button onClick={cancelEdit}>Cancel</button>
                        <p>params object: {JSON.stringify(params)}</p>

                    </form>
                </>
            </Route>
        </Router>
    )

}

export default EditMovie 