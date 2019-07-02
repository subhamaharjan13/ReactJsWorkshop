import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieAdd from './components/MovieAdd';
import MovieEdit from './components/MovieEdit';
import MovieDetails from './components/MovieDetails';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/' component={MovieList}/>
        <Route exact path='/add-movie' component={MovieAdd}/>
        <Route exact path='/movie-edit/:id' component={MovieEdit}/>
        <Route exact path='/movie-details/:id' component={MovieDetails}/>
      </Switch>

    </BrowserRouter>
    // <div><Header />
    //   <MovieList />
    //   </div>

    //<h1>Hello Wlit</h1>
  );
}

export default App;
