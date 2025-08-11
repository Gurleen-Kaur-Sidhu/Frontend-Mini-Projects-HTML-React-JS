import React from 'react'
import {Otpinput} from "otp-input-react"

const Otp = () => {
  return (
    <div>
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
                                    <form>
                                        <div className="form-group">
                                            <h1>OTP</h1>
                                            <label className="label-text" htmlFor="ph">enter OTP</label>
                                            <Otpinput OTPLength={6} otpType={false} autofocus className='opt-container'> </Otpinput>

                                        </div>

                                        <button id="signin" type="submit" className="btn btn-warning h-25 w-100 p-2 mt-2 text-center">Continue</button>
                                        
                                        
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
    </div>
  )
}

export default Otp
