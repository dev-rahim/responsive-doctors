import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-10 ">
                            <h1 className='banner-title fw-bolder text-light'>
                                Take care of your Health Now!
                            </h1>
                            <h3 className='banner-subtitle text-light'>Sell upto 30% all products</h3>
                            <div className="btn btn-light fw-bold mt-4">Shop Now</div>
                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;