import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{_id,name,img,description,price}= service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);

    }
    return (
        <div className='service text-dark bg-white'>
            <img src={img} alt="" />
            <h2 className='mt-2'> {name}</h2>
            <p>Price: {price}</p>
            <p className='p-3'><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-dark'>{name}</button>
        </div>
    );
};

export default Service;