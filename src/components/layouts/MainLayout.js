import React from 'react';

import './MainLayout.less';

export default function MainLayout({ children }) {
    return (
        <div className='MainLayout'>
            {children}
       </div>
    )
}
