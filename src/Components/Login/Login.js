import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';


const Login = () => {
    const {
        githubSignInHandler,
        googleSignInHandler,
        handleSignOut,
        handleSubmit,
        handleEmail,
        handlePassword,
        emailSignInHandler,
        toggler,
        isLogin,
        user,
        error,
        handleUserName } = useAuth();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-7 formpart">
                <form className="p-5">
                {
                    !isLogin && 
                    <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input onChange={handleUserName} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="User Name" required/>
                    </div> 
                }
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your E-mail" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    <div className="form-check mt-3">
                    <input onChange={toggler} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label text-white fw-bold" htmlFor="exampleCheck1">Already a User?</label>
                    </div>
                    {
                        error && <h5 className="text-danger mt-3">{error}</h5>
                    }
                </div>

                {
                    (isLogin && !user.email) && 
                    <div className="m-auto text-center">
                    <button onClick={emailSignInHandler} type="submit" className="btn btn-warning mt-4">Log In</button>
                    </div> 
                }
                
                {   (!isLogin && !user.email) &&
                    <div className="m-auto text-center">
                        <button onClick={handleSubmit} type="submit" className="btn btn-warning mt-4 me-3">Register</button> 
                    </div>
                }
                
                { user.email &&  
                    <div className="m-auto text-center"><button onClick={handleSignOut} type="submit" className="btn btn-warning mt-4">Log Out</button></div>   
                }
                </form>
                <hr className="p-1 text-white" />
                <div className="text-center m-auto">
                <button onClick={googleSignInHandler} className="btn mt-2 border-0 me-5"><i className="fab fa-google fa-3x"></i></button>
                    <button onClick={githubSignInHandler} className="btn mt-2 border-0"><i className="fab fa-github fa-3x"></i></button>
                </div>
                </div>
                <div className="col-sm-5 imgpart">

                </div>
            </div>
        </div>
    );
};

export default Login;