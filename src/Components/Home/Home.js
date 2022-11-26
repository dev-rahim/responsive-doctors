import React from 'react';
import Banner from '../Banner/Banner';
import Instructions from '../Instructions/Instructions';
import MenuBar from '../Shared/MebuBar/MenuBar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
            <Instructions />
        </div>
    );
};

export default Home;