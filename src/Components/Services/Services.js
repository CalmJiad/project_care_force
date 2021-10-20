import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';
import Success from '../Success/Success';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/fakedata.json")
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);   

    return (
        <div>
          <div className="container">
            <div className="divider mb-5"><span></span><span>Medi Care Specialized Unit</span><span></span></div>
            <div className="row g-4 card-group p-3">
                {
                    services.map((service) => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
          </div>
          <Success></Success>
          <Doctors></Doctors>
        </div>
    );
};

export default Services;
