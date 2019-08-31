import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      isLoading: true
    }
  };

  getMovie = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovie();
  }

  render() {
    const {isLoading, movies} = this.state
    console.log(movies);

    return (
      <div>
        <h1>Movie</h1>
        <h1>{isLoading ? "Loading" : movies.map(v =>(<Movie key={v.id} id={v.id} title={v.title}/>))}</h1>
      </div>
    );
  }
}

export default App;
