import React from 'react';
import './Home.css';
import banner1 from '../../images/banner-images/banner1.jpg';
import banner2 from '../../images/banner-images/healthy-woman-doctor-s-office.jpg';
import banner3 from '../../images/banner-images/physician-corporate-brown-hair-contract-sophisticated (1).jpg';
import Extra from '../Extra/Extra';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <div className="">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner banner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
            <Extra></Extra>
            <Services></Services>
        </div>
    );
};

export default Home;