import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'



function MovieDetail() {

    const history = useHistory();

    const navToHome = () => {
        history.push('/')
    }

    return (
        <Router >
            <Route path="/details">
                <p>detail page</p>
                <button onClick={navToHome}>Back to List</button>
            </Route>
        </Router>
    )
}

export default MovieDetail