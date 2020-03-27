import React     from 'react';
import PropTypes from 'prop-types'

import Card      from './Card';

import './List.less';

function List({ items }) {
    return (
        <div className='List'>
            {items.map(({ id, name }) => <Card key={id} name={name} />)}
        </div>
    );
}

List.propTypes = {
    items : PropTypes.array.isRequired
}

export default List;
    