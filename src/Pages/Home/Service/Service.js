import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name,img,description,price}= service;
    return (
        <div className='service text-dark bg-white'>
            <img src={img} alt="" />
            <h2 className='mt-2'> {name}</h2>
            <p>Price: {price}</p>
            <p className='p-3'><small>{description}</small></p>
            <button className='btn btn-dark'>{name}</button>
        </div>
    );
};

export default Service;