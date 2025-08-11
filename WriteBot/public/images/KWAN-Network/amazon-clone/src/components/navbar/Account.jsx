

import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from './Firebse';


const Account = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ename, setEname] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage(""); 
        
       
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage("Invalid email address.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: ename
                });
            }

            console.log("User successfully registered");
            alert("User Register Successfully");
        } catch (error) {
            console.log(error.message);
            setErrorMessage("User Not Registered: " + error.message); 
            alert("User Not registered")
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
                                    <form onSubmit={handleRegister}>
                                        <div className="form-group">
                                            <h1>Create Account</h1>
                                            <label className="label-text" htmlFor="exampleInputname">Your Name</label>
                                            <input type="text" className="form-control" id="exampleInputname" onChange={(e) => setEname(e.target.value)} placeholder="First and Last name" />

                                            <label className="label-text" htmlFor="exampleInputphone">Email</label>
                                            <div className='d-flex'>
                                                <input type="email" className="form-control" id="exampleInputphone" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                            </div>
                                            

                                            <label className="label-text" htmlFor="examplepasswordname">Password</label>
                                            <input type="password" className="form-control" id="examplePasswordname" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            <p className='my-3'></p>
                                        </div>{errorMessage && <small className="text-danger">{errorMessage}</small>}
                                        <button id="signin" type="submit" className="btn btn-warning w-100 h-25 p-2 mt-2 mb-3 text-center">Create Account</button>
                                        <hr />
                                        <div className=''>
                                            <label className="form-check-label text-bold mt-2" htmlFor="exampleCheck1">Buying for work?</label>
                                            <div className='mb-3'><a href=''>Create a free business account</a></div>
                                        </div>
                                        <div><hr /></div>
                                        <div>
                                            <div className=''>
                                                <label className="form-check-label text-bold mt-2" htmlFor="exampleCheck1">Already have an account? <Link to='/signin'>Sign In <i className="bi bi-caret-right-fill"></i></Link></label>
                                                <div className='mb-3'>By creating an account or logging in, you agree to Amazon’s <a href=''>Conditions of Use</a> and <a href=''>Privacy Policy</a>.</div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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

export default Account;











