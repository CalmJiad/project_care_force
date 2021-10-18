import React from 'react';
import './About.css';
import aboutimg from "../../images/about_us_banner.png";

const About = () => {
    return (
        <div className="container-fluid mt-5">
            <div class="divider"><span></span><span>History Of Us</span><span></span></div>
            <div className="row p-5 pt-0">
                <div className="col-md-7 col-sm-12 m-auto">
                    <img src={aboutimg} className="img-fluid" alt="" />
                </div>
                <div className="col-md-5 col-sm-12 fs-5 text-white bg-primary about-text">
                    <p className="p-4">Medi Care Hospitals was established in 2003 by Dr. Shagar Chowdhury, renowned as the architect of modern healthcare in Bangladesh. As the nation’s first corporate hospital, Medi Care Hospitals is acclaimed for pioneering the private healthcare revolution in the country.Medi Care Hospitals has emerged as Asia’s foremost integrated healthcare services provider and has a robust presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics and several retail health models. The Group also has Telemedicine facilities across several countries, Health Insurance Services, Global Projects Consultancy, Medical Colleges, Medvarsity for E-Learning, Colleges of Nursing and Hospital Management and a Research Foundation. In addition, ‘ASK Medi Care’ – an online consultation portal and Medi Care Home Health provide the care continuum. The organization embraced the rapid advancement in medical equipments across the world, and pioneered the introduction of several cutting edge innovations in Bangladesh. </p>
                </div>
            </div>
        </div>
    );
};

export default About;