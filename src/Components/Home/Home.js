import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Contact from '../Contact/Contact';
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
            <Contact />
        </div>
    );
};

export default Home;