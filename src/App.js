import React from 'react';
import axios from 'axios';
import Movie from './Component/Movies';

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
      <secction className="container">
      { isLoading 
        ? (<div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )
      }
      </secction>
    );
  }
}

export default App;
