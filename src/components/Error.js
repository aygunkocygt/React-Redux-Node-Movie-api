import React, {} from 'react';
import PropTypes from 'prop-types';

const Error = props => {

           return (
            <div className="Error">
                {props.message}
            </div>
        );
    };

Error.propTypes = {
    message:PropTypes.string.isRequired
};

export default Error;