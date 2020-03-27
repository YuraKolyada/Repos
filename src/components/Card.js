import React     from 'react';
import PropTypes from 'prop-types';

import './Card.less';
function Card({ name }) {
    return (
        <div className='Card'>
            <p className='Card__name'>{name}</p>
        </div>
    );
}

Card.propTypes = {
    name : PropTypes.string.isRequired
}

export default Card;
