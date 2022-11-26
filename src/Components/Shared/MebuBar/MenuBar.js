import React from 'react';
import './MenuBar.css'
import Logo from '../../../images/Banner&Background/logo.png'

const MenuBar = () => {
    return (
        <div>
            <div className="menubar-container">
                <div className="menubar container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className='p-2' src={Logo} alt="Logo" />
                        </div>
                        <div className="col-md-10">
                            <div className="menu-items">
                                <ul className='d-flex justify-content-end align-item-center me-5'>
                                    <li className='p-2'>Home</li>
                                    <li className='p-2'>Shop</li>
                                    <li className='p-2'>Contacts</li>
                                    <li className='p-2'>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;