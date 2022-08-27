import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';



function MovieDetail() {

    const detailMovie = useSelector(store => store.detailMovie)
    console.log(detailMovie);

    const history = useHistory();

    const navToHome = () => {
        history.push('/')
    }

    return (
        <Router >
            <Route path="/details">

                <div>
                    {/* <table>
                        <tbody> */}

                    {detailMovie.map((movie) => {
                        return (
                            <>
                                <h1>{movie.title}</h1>
                                {movie.array_agg.map((genre) => {
                                    return (
                                        <p>{genre}</p>
                                    )
                                })}
                                <img src={movie.poster}></img>
                                <h3>{movie.description}</h3>

                            </>

                        )

                    })}

                    {/* </tbody>
                    </table> */}
                </div>
                <button onClick={navToHome}>Back to List</button>
            </Route>
        </Router>
    )
}

export default MovieDetail