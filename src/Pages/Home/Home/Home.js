import React from 'react';
import Location from '../../Location/Location';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Location></Location>
        </div>
    );
};

export default Home;