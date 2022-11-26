import React from 'react';
import { useState, useEffect } from 'react'
import Instruction from '../Instruction/Instruction';
import './Instructions.css'

const Instructions = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('CategoryData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className=" mt-5 container ">
                <div className=" instruction-top mb-3">
                    <h6>
                        <span className='me-3'> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
                        Prevention
                        <span className='ms-3'> <img src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png" alt="" /></span>
                    </h6>
                </div>
                <h2 className='fw-bolder instruction-title'>How to Prevent Yourself</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores ipsum illum aliquid itaque consequatur provident adipisci consequuntur!</p>

                <div className="instruction-cart">
                    <div className="row">
                        {
                            data.map((instruction) => <Instruction key={instruction.id} Instruction={instruction} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructions;