import React, {} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid} from 'semantic-ui-react'
import { CircleLoader } from 'react-spinners';


const MoviesList =  ({ movies,deleteMovie }) => {
    const emptyMessage = (
        <p>Burada henüz film yok..</p>
    );
    const moviesList = (
        <div>

            <CircleLoader
                color={'#35bdb2'}
                loading={movies.fetching}
            />
            {
                movies.error.response
                    ? <h3>Error retrieving data!</h3>
                    :
                    <Grid stackable columns={3}>
                        {
                            movies.movieList.map(movie => <MovieCard
                                key={movie._id}
                                movie={movie}
                                deleteMovie={deleteMovie}
                            />)
                        }
                    </Grid>
            }
        </div>
    );
    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
};



MoviesList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
};

    export default MoviesList;