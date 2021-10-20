import React, { useEffect, useState } from 'react';
import './Doctors.css';


const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() =>{
        fetch("/fakedoctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div className="container">
        <div className="divider mb-5">
            <span></span><span>Our Top Experienced Consultants</span><span></span>
        </div>
        <div className="row g-5 card-group p-3 mb-5">
            {
                doctors.map((data) =>
                <div key={data.name} className="col-md-4 col-sm-12">
                    <div className="card docs">
                        <img src={data?.img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body text-center">
                        <h4 className="card-title">{data?.name}</h4>
                        <h5 className="card-text text-secondary">{data?.Speciality}</h5>
                        <button className="btn btn-outline-success px-5 mt-3">Make Appointment</button>
                    </div>
                 </div>
                </div>
                )
            }
        </div>
        </div>
    );
};

export default Doctors;