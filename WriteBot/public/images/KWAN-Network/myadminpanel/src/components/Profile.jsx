import React from 'react';
import './Profile.css'
import Header from './header/Header';

const Profile = () => {


  return (
    <div>
      <Header></Header>
      <div className='title'>
        <h1>Profile Info</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Profile-Info</li>
          </ol>
        </nav>
      </div>

      <div className='profile-section'>
        <div class="my-form" style={{ height: "500px", width: "1150px", padding: "15px" }}>
          <form>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name"></input>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name"></input>
              </div>

              <div class="form-group mt-3">

                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div><br></br>
              <div class="form-group mt-3">

                <input type="text" class="form-control" placeholder="Phone Number"></input>
              </div>
              <div class="form-group mt-3">

                <input type="text" class="form-control" placeholder="Address 1"></input>
              </div>
              <div class="form-group mt-3">

                <input type="text" class="form-control" placeholder="Address 2"></input>
              </div>
              <span>
                <button class="btn btn-lg mt-3" style={{ backgroundColor: "blueviolet", color: "white" }}>New User

                </button></span>
            </div>

          </form>
        </div></div>
    </div>
  );
};

export default Profile;