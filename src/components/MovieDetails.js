import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {snakeCase} from 'lodash'


export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cast: ''
    }
    this.serverURL = 'http://localhost:4000/movies/'
    this.id = this.props.match.params.id
    console.log('hhhhhhhhhh', this.id)
  }

  componentDidMount() {
    fetch(this.serverURL + this.id)
    .then(res => res.json())
    .then(data => {
      console.log('data,,,,,', data);
      this.setState(data);
    });
  }

  
  render() {
    return (
      <div className='movie-detail container '>
      <div className="row">
        <div className="col-sm-12">
        
        <h2>
          {this.state.name}
        </h2>
        <img src={`/images/${snakeCase(this.state.name)}.jpg`} className="card-img-top" alt="..." /> 
        <p>
            <strong>Cast:</strong> {this.state.cast}
        </p>
        <p>
            <strong>Genre:</strong> {this.state.genre}
        </p>
        <p>
            <strong>Description:</strong> {this.state.description}
        </p>
        <Link className="btn btn-info" to="/">Go Back</Link>
        </div>
      </div>
        
        
        {/* <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Cast</label>
            <input type="text" className="form-control" name="cast" onChange={this.handleChange} value={this.state.cast} />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input type="text" className="form-control" name="genre" onChange={this.handleChange} value={this.state.genre} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" name="description" rows="3" onChange={this.handleChange} value={this.state.description}></textarea>
          </div>
          
        </form> */}
      </div>
    )
  }
}