import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import EditMovie from '../EditMovie/EditMovie'
import { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import storeInstance from '../index.js';





declare module '@mui/material/styles' {
interface Theme {
    palette: {
        primary: {
            main: string,
            // spacing: number,
        }
    }
}
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
            // spacing: 4,

        },
        secondary: {
            main: '#ffc107',
        },
    },
});



function MovieDetail() {

    const dispatch = useDispatch();


    useEffect(() => {
        getDetail();
    }, []);

    const detailMovie = useSelector((store: any) => store.detailMovie)


    type idParams = {
        id: string;
    };

    interface Movie  {
        title: string;
        poster: string;
        genre: string[];
        description: string;
    }



    const params = useParams<idParams>();

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
                <ThemeProvider theme={theme}>
                    <Card sx={{ width: 700, borderRadius: '16px', backgroundColor: '#fff8dc' }} variant="outlined" className="detailCard">
                        <CardContent>
                            <div>
                                {/* <table>
                        <tbody> */}
                                {detailMovie.map((movie: Movie) => {
                                    return (

                                        <>
                                            <h1>{movie.title}</h1>
                                            <img src={movie.poster}></img>
                                            <div className="detailGenre">
                                                {movie.array_agg.map((genre: string) => {

                                                    return (

                                                        <p className="detailGenreText">{genre}</p>

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
                    <Button onClick={navToEdit} sx={{ mr: 1, mt: 2, mb: 2, backgroundColor: '#fff8dc' }} variant="outlined">Edit Movie</Button>
                    <Button onClick={navToHome} sx={{ ml: 1, mt: 2, mb: 2, backgroundColor: '#fff8dc' }} variant="outlined">Back to List</Button>
                </ThemeProvider>
            </Route>
        </Router>
    )
}



export default MovieDetail