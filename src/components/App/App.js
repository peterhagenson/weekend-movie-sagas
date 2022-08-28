import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import MovieForm from '../MovieForm/MovieForm'
import EditMovie from '../EditMovie/EditMovie'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/roboto";


function App() {
  return (
    <div className="App">
      <header>
      <h1 className="headerText">The Movies Saga!</h1>
      </header>
      
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
