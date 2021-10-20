import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row bg-dark">
                <div className="col-md-3 p-5 footeritem">
                 <div className="logo-brand footer-logo">
                    <p className="brand">
                        <i className="fas fa-heartbeat"></i>Medi Care
                    </p>
                 </div>
                 <br />
                 <p className="text-info">Better Technologies <br /> for Better Healthcare</p>
                </div>
                <div className="col-md-3 p-5 text-info footeritem">
                    <h5>Our Location</h5>
                    <p className="mt-4">1211, Chattagram Hill View <br /> Hill View Residential R/A <br /> Pahartali, Chattagram, Bangladesh</p>
                    <p>Email Us: support@wpmedservice.com <br /> P: +12 9 8765 4321</p>
                </div>
                <div className="col-md-3 p-5 text-info footeritem">
                    <h5>Working Time</h5>
                    <p className="mt-4">Mon - Wed - 9:00 AM - 7:00 PM <br /> 
                    Thursday - 9:00 AM - 6:30 PM <br /> 
                    Friday - 9:00 AM - 6:00 PM <br /> 
                    Sat - Sun - Closed</p>
                </div>
                <div className="col-md-3 p-5 text-info footeritem">
                    <h5>Emergency? Call Us @</h5>
                    <h5 className="mt-4">1-730-633-4850</h5>
                    <p className="mt-4">Solutions to Complex Medical Problems: Medi Care</p>
                </div>
            </div>
            <p className="text-center text-white mb-0 copyright">&copy; All Rights Reserved | | Ekramul Haque Jiad | | 2021</p>
        </div>
    );
};

export default Footer;