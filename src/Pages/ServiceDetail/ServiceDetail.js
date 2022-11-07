import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service,setServices]= useState({});

    useEffect(()=>{
            const url = `http://localhost:5000/service/${serviceId}`

            fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div className='container text-center my-5 p-5 bg-white'>
            <h2 >You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to="/checkout" >

                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;