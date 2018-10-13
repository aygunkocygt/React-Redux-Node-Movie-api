import React from 'react'
import { Card,Grid,Button,} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const  extra = (movie,deleteMovie) => {

 return(
    <div className="ui two buttons">

        <Button inverted as={Link} to={`/movie/${movie._id}`} color='blue'>
           Edit
        </Button>
        <Button inverted onClick={() => deleteMovie(movie._id)} color='red'>
            Delete
        </Button>

    </div>

);
};

const MovieCard = ( {movie,deleteMovie}) => (
    <Grid.Column>
    <Card>

        <Card
            image={movie.cover}
            header={movie.title}
            extra={extra(movie,deleteMovie)}
        />

    </Card>
    </Grid.Column>
);

export default MovieCard;