import { Route, Switch,Redirect } from 'react-router-dom';
import Navigation from './global/Navigation';
import Home from './global/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './moviesList/MovieLists';
import MoviesDetails from './moviesDetails/MoviesDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/:moviesCategory/:path" component={MoviesDetails} />
        <Route path="/:moviesCategory" component={MoviesList} />
        <Route path="/" component={Home} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
