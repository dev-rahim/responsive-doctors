import React from 'react';
import Banner from '../Banner/Banner';
import MenuBar from '../Shared/MebuBar/MenuBar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
        </div>
    );
};

export default Home;