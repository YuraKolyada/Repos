import React     from 'react';
import PropTypes from 'prop-types';

import './Card.less';
function Card({ name, url, owner }) {
    return (
        <div className='Card'>
            <div className='Card__header'>
                <img src={owner.avatar_url} className='Card__avatar' />
                <a href={owner.html_url} className='Card__author-name' target='_blank'>
                    {owner.login}
                </a>
            </div>
            <div className='Card__content'>
                <p className='Card__name'>{name}</p>
            </div>
            <div className='Card__footer'>
                <a href={url} className='Card__link' target='_blank'>Link</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    name  : PropTypes.string.isRequired,
    owner : PropTypes.object.isRequired,
    url   : PropTypes.string.isRequired
}

export default Card;
