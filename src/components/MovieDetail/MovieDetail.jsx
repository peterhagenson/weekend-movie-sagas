import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import EditMovie from '../EditMovie/EditMovie'
import { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function MovieDetail() {

    const dispatch = useDispatch();


    useEffect(() => {
        getDetail();
    }, []);

    const detailMovie = useSelector(store => store.detailMovie)




    const params = useParams();

    const history = useHistory();

    const navToHome = () => {
        history.push('/')
    }

    const navToEdit = () => {
        // console.log(detailMovie.id);
        history.push(`/editMovie/${params.id}`)
    }

    const getDetail = () => {
        dispatch({
            type: 'FETCH_DETAIL_MOVIE',
            payload: params.id
        })
        dispatch({
            type: 'GENRES',
            payload: params.id
        })
    }



    return (
        <Router >
            <Route path="/details/:id">
                <Card sx={{ width: 700, borderRadius: '16px' }} variant="outlined" className="detailCard">
                    <CardContent>
                        <div>
                            {/* <table>
                        <tbody> */}
                            {detailMovie.map((movie) => {
                                return (

                                    <>
                                        <h1>{movie.title}</h1>
                                        <img src={movie.poster}></img>
                                        <div class="detailGenre">
                                            {movie.array_agg.map((genre) => {

                                                return (

                                                    <p class="detailGenreText">{genre}</p>

                                                )

                                            })}
                                        </div>
                                        <h3>{movie.description}</h3>
                                        {/* <Route path="/editMovie" exact>
                                    <EditMovie movie={movie} />
                                </Route> */}

                                    </>

                                )

                            })}

                            {/* </tbody>
                    </table> */}
                        </div>
                    </CardContent>
                </Card >
                <button onClick={navToEdit}>Edit Movie</button>
                <button onClick={navToHome}>Back to List</button>

            </Route>
        </Router>
    )
}



export default MovieDetail