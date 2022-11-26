import React from 'react';
import './Instruction.css'

const Instruction = (props) => {
    const { name, image, description } = props.Instruction;
    return (
        <div className="col-lg-4 col-md-6">
            <div >
                <div className="cart border border p-3 m-2">
                    <div className="cart-img">
                        <img src={image} alt="" />
                    </div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Instruction;