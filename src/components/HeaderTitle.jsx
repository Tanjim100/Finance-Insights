import React from 'react';

const HeaderTitle = ({title, para}) => {
    return (
        <div className='pt-10 space-y-3'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-xl text-gray-600'>{para}</p>
        </div>
    );
};

export default HeaderTitle;