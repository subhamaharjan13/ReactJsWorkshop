import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {snakeCase} from 'lodash'
console.log('---')
 
class MovieList extends Component {
    constructor(props) {
console.log('---')

        super(props);
        this.state = {
          movies: []
        }
        this.serverURL = 'http://localhost:4000/movies/'
    }

    componentDidMount() {
        console.log('getting data');
        fetch(this.serverURL)
        .then((data => data.json()))
        .then((movies) => {
            console.log('data........',movies)
            this.setState({
                movies: movies
            })
        })
    }

    handleDelete = (id) => {
        fetch(this.serverURL + id, { method: 'DELETE' });
        const movies = this.state.movies;
        const position = movies.findIndex((movie) => id === movie.id);
        movies.splice(position, 1);
        this.setState({ movies });
      }

    render() {
        return (
          <div className="container">
            <div className="row">
                {this.state.movies.map((movie) =>
                  <div className="col-sm-4" key={movie.id}>
                    <div className="card movie-card">
                      <img src={`/images/${snakeCase(movie.name)}.jpg`} className="card-img-top" alt="..." /> 
                      <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="card-text">Cast: {movie.cast}</p>
                        <p className="card-text">Genre: {movie.genre}</p>
                        <Link className="btn btn-primary button" to={`/movie-edit/${movie.id}`}>Edit</Link>
                        <button className="btn btn-danger button" onClick={() => this.handleDelete(movie.id)}>Delete</button>
                        <Link className="btn btn-primary button" to={`/movie-details/${movie.id}`}>Details</Link>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )
    }
}

export default MovieList