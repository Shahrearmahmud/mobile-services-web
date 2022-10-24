import React from 'react';
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark text-white p-3'>
            <h5 ><small>All credit goes to Shahrear Mahmud (Copyright © {year})</small></h5>
        </footer>
    );
};

export default Footer;