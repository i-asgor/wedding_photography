import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-dark'>
            <p className='text-white'>@ {year} copyright wedding photography</p>
        </div>
    );
};

export default Footer;