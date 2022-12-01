import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container-lg'>
            <div className="contact-container mt-5">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <div className="contact-from w-100">
                            <input className='input-field' type="text" name="" id="" placeholder='Your Name' /><br />
                            <input className='input-field' type="email" name="" id="" placeholder='Your Email' /><br />
                            <input className='input-field' type="password" name="" id="" placeholder='Your Password' /><br />
                            <input className='mt-2 w-50 input-submit' type="submit" value="Submit" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className='w-100' src="https://i.ibb.co/XVdmctj/undraw-contact-us-15o2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;