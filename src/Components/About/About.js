import './About.css'
import React from 'react';
import kit from '../../images/Banner&Background/kit.png'


const About = () => {
    return (
        <div className='container'>
            <div className="about-section mt-5">
                <div className="row ">
                    <div className="col-md-6 p-5">
                        <div className="about-img w-100 ">
                            <img className='w-100' src={kit} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <div className="about-text p-5 text-start">
                            <h4 className='mt-5'>About Us <span><img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span></h4>
                            <h2 className='fw-bolder mt-3'>Medical Equipment's & Kits</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet error et sequi, veniam alias sapiente ducimus quis libero ipsam illo inventore dignissimos tenetur eum cumque hic iusto omnis earum minus numquam possimus vel dolores quibusdam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;