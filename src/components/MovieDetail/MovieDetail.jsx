import { HashRouter as Router, Route } from 'react-router-dom';


function MovieDetail() {
    return (
        <Router >
            <Route path="/details">
                <p>detail page</p>
            </Route>
        </Router>
    )
}

export default MovieDetail