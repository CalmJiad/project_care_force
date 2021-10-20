import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div style={{backgroundColor: '#2b7a78', height: '600px'}} className="text-white contact">
            <div className="col-md-6 mx-auto pt-5 pb-3">
            <h1 className="mb-3"> Contact Info </h1>
            <p>
            We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound. Thanks for signing up for updates.
            <br/>
            <br/>
            3343 Hillview R/A Area | Chattagram | Bangladesh <br />
            +00252 02555 55 <br />
            info@qizbari.com
            </p>
            </div>
            <div className ="mm col-md-6 mx-auto">
            <form className="row g-3">
            <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="Mark" required/>
            </div>
            <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationDefault02" placeholder="Otto" required/>
            </div>
            <div className="col-md-4">
            <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
            <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
            </div>
            </div>
            <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">City</label>
            <input type="text" className="form-control" id="validationDefault03" required/>
            </div>
            <div className="col-md-3">
            <label htmlFor="validationDefault04" className="form-label">Course</label>
            <select className="form-select" id="validationDefault04" required>
                <option disabled value="">Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div className="col-md-3">
            <label htmlFor="validationDefault05" className="form-label">Number</label>
            <input type="text" className="form-control" id="validationDefault05" required/>
            </div>
            <div className="col-md-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
                </label>
            </div>
            </div>
            <div className="col-md-12">
            <button className="btn btn-danger" type="submit">Submit</button>
            </div>
        </form>
        </div> 
        </div>
        </div>
    );
};

export default Contact;