import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img, id, name} = service;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <Link to={`/services/${id}`}>
                <button className="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
        </div>       
    );
};

export default Service;