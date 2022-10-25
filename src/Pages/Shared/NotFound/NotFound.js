import React from 'react';
import sleeping from '../../../images/sleepy mechanice.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-white text-center'>Our Experts are Sleeping.... :3</h1>
            <img className='img-fluid w-100 ' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;