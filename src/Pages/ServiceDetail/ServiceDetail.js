import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container text-center my-5 p-5 bg-white'>
            <h2 >Welcome to service : {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkout" >

                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;