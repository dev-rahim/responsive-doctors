import React from 'react';
import './Catagory.css'
const Catagory = () => {
    return (
        <div>
            <div className="category-container">
                <div className=" instruction-top mb-3">
                    <h6>
                        <span className='me-3'> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
                        Prevention
                        <span className='ms-3'> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
                    </h6>
                    <h2 className='fw-bolder instruction-title'>How to Prevent Yourself</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores ipsum illum aliquid itaque consequatur provident adipisci consequuntur!</p>
                    <button className="category-button-active category-btn-1 category-btns">New Arrivals</button>
                    <button className="category-btn-2 category-btns">Featured</button>
                    <button className="category-btn-3 category-btns">Best Seller</button>
                </div>
            </div>
        </div>
    );
};

export default Catagory;