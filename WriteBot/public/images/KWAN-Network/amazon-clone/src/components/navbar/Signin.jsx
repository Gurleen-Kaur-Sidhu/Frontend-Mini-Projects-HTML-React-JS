
import React, { useState} from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebse';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); 

      
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage("Invalid email address.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            alert("User logged in successfully")
            navigate("/home")
           
        } catch (error) {
            console.log(error.message);
            setErrorMessage("Error logging in: " + error.message); 
            alert("User Not logged In")
        }
    };

    return (
        <div className='d-flex align-items-center justify-content-center' style={{ width: "100vw" }}>
            <div className='w-100 h-100 bg-light'>
                <div className='col-md-4 offset-md-4' style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <img id="logo" src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg" alt="Image" height={'100px'} width={'200px'} />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="">
                                <div className="card" id="signinbox">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <h1>Sign in</h1>
                                            <label className="label-text" htmlFor="exampleInputEmail1">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                aria-describedby="emailHelp"
                                                placeholder=""
                                            />
                                            

                                            <label className="label-text" htmlFor="examplepasswordname">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="examplePasswordname"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password"
                                            />
                                        </div>
                                        {errorMessage && <small className="text-danger">{errorMessage}</small>}
                                        <button id="signin" type="submit" className="btn btn-warning h-25 w-100 p-2 mt-2 text-center">Continue</button>
                                        <div className='m-2'>
                                            <label className="form-check-label" htmlFor="exampleCheck1">By continuing, you agree to Amazon's <a href="detailshyperlink"> Conditions of Use</a> and <a href="detailshyperlink"> Privacy Notice</a>.</label>
                                            <div className='my-4'><a href=''>Need Help?</a></div>
                                        </div>
                                        <div><hr /></div>

                                        <div>Buying for work?</div>
                                        <div className='my-2'><a href=''>Shop on Amazon Business</a></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center'>
                            <a type="submit" className="block">New to Amazon</a>
                        </div>

                        <div className='d-flex align-items-center justify-content-center'>
                            <button id="create" type="submit" className="btn btn-warning h-25 w-100 p-2 mt-2 text-center border border-1 border-dark">
                                <Link to='/account' className='text-dark'>Create your Amazon Account</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='d-flex align-items-center justify-content-center'>
                    <a href='' className='m-2'>Terms and Conditions</a>
                    <a href='' className='m-2'>Privacy-Notice</a>
                    <a href='' className='m-2'>Settings</a>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    );
};

export default Signin;



