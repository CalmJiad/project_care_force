import React from 'react';

const Success = () => {
    return (
        <div className="container-fluid bg-primary p-5 my-5 m-auto text-center text-white">
            <div className="row">
                <div className="col-md-3 p-3">
                    <h2><i className="far fa-hospital"></i> 1266</h2>
                    <p className="fs-5">Dedicated Hospital Rooms</p>
                </div>
                <div className="col-md-3 p-3">
                    <h2><i className="fas fa-user-md"></i> 314</h2>
                    <p className="fs-5">Specialist Doctors</p>
                </div>
                <div className="col-md-3 p-3">
                    <h2><i className="fas fa-hospital-user"></i> 17389</h2>
                    <p className="fs-5">Happy Patients</p>
                </div>
                <div className="col-md-3 p-3">
                    <h2><i className="fas fa-thumbs-up"></i> 07</h2>
                    <p className="fs-5">Years Of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Success;