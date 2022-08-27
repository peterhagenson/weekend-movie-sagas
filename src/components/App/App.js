import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import MovieForm from '../MovieForm/MovieForm'
import EditMovie from '../EditMovie/EditMovie'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetail/>
        </Route>
        <Route path="/addMovie" exact>
          <MovieForm />
        </Route>
        <Route path="/editMovie/:id" exact>
          <EditMovie/>
        </Route>
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
