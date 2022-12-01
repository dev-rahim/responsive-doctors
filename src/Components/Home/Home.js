import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Instructions from '../Instructions/Instructions';
import MenuBar from '../Shared/MebuBar/MenuBar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
            <Instructions />
            <About />
            <Catagory />
        </div>
    );
};

export default Home;