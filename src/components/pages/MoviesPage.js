import React, {Component} from 'react';
import { connect } from 'react-redux'; //redux store baglanmak
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';
import { fetchMovies,deleteMovie } from '../../actions/movies';

class MoviesPage extends Component {
    static propTypes = {
     movies:PropTypes.object.isRequired,
        deleteMovie:PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchMovies();
    }


    render() {
        console.log(this.props);
        return (
            <div>
              <h2>Movies</h2>
            <MoviesList
                deleteMovie={this.props.deleteMovie}
                movies={this.props.movies}
            />
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = ({movies}) => {
    return{
      movies
    }
};

const mapDispatchToProps = {
    fetchMovies,
    deleteMovie
};

export default connect (mapStateToProps,mapDispatchToProps) (MoviesPage);