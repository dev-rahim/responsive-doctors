import React from 'react';
import './CategoryItem'
const CategoryItem = (props) => {
    const { name, price, image } = props.item;
    return (
        <div className='col-lg-3 col-md-6'>
            <div className="item-image">
                <img className='w-100' src={image} alt="" />
                <h5>{name}</h5>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default CategoryItem;