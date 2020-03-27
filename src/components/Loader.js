import React from 'react';

import './Loader.less';

export default function Loader() {
    return (
        <div className='Loader'>
            <div className='Loader__content'>
                <div className='Loader__spin' />
            </div>
        </div>
    );
}