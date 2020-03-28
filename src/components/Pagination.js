import React      from 'react';
import Pagination from 'rc-pagination';

import 'rc-pagination/assets/index.css';

export default function AppPagination({ onChange, total, current, className }) {
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
