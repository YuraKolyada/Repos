import React      from 'react';
import PropTypes  from 'prop-types';
import Pagination from 'rc-pagination';

import 'rc-pagination/assets/index.css';

function AppPagination({ onChange, total, current, className }) {
    return (
        <Pagination
            current   = {current}
            total     = {total}
            onChange  = {onChange}
            locale    = 'en_GB'
            className = {className}
            pageSize  = {30}
            showSizeChanger
        />
    )
}

AppPagination.propTypes = {
    onChange  : PropTypes.func.isRequired,
    className : PropTypes.string.isRequired,
    total     : PropTypes.number.isRequired,
    current   : PropTypes.number.isRequired
}

export default React.memo(AppPagination);
