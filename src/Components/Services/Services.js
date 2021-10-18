import React, {useState, useEffect} from 'react';
import './Services.css';

const Services = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("/fakedata.json")
        .then(res => res.json())
        .then(data => setService(data));
    }, []);   

    return (
        <div className="container">
            <div class="divider mb-5"><span></span><span>Medi Care Specialized Unit</span><span></span></div>
            <div class="row g-4 card-group p-3">
            {
                service.map(item => (
                    <div className="col-md-4 col-sm-12">
                        <div class="card">
                        <img src={item.img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h4 class="card-title">{item.name}</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Services;