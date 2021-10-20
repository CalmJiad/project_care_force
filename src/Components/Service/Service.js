import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img, id, name, description} = service;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                <h3 className="card-title text-primary">{name}</h3>
                <p className="card-text">{description.slice(0, 300) + '......'}</p>
                <Link to={`/services/${id}`}>
                <button className="btn btn-success px-5">Details</button>
                </Link>
            </div>
        </div>
        </div>       
    );
};

export default Service;