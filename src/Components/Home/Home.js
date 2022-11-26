import React from 'react';
import MenuBar from '../Shared/MebuBar/MenuBar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <MenuBar />
            <h2 className='text-danger'>Home</h2>
        </div>
    );
};

export default Home;