import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/fakedetails.json")
        .then(res => res.json())
        .then(data => setData(data.employee))
    }, []);

    const findData = data.find(item => item?.id === id);

    // <h2>Vai aai asi {id} {findData?.department}</h2>
    // <h2>{findData?.name}</h2>


    return (
        <div className=" my-5 text-center">
        <h1 className="mb-4 dept-heading">{findData?.department}</h1>
        <div className="detailcard card m-auto" style={{width: "58rem"}}>
        <img className="card-img-top doc-img w-100 img-fluid" src={findData?.img} alt="" />
        <div className="card-body">
            <h3 className="card-title head-name">Head: {findData?.name}</h3>
            <p className="card-text fs-4 px-2">Biography: {findData?.about}</p>
            <p className="card-text p-3 fs-5">{findData?.description}</p>
            <a href="/" className="btn btn-primary">Make Appointment</a>
        </div>
        </div>
        </div>
    );
};

export default ServiceDetails;