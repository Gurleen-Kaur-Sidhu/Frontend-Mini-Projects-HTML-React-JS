
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Card from '../card/Card'
 import Barchart from '../barchart/Barchart.jsx'
 import RadialChart from '../radialchart/RadialChart.jsx'
 import Progress from 'react-circle-progress-bar'
import { blue } from '@mui/material/colors';
import Header from '../../header/Header.jsx';


const Dashboard = () => {
  const [cards, setCards] = useState([{
    "id": 1,
    "ename": "Jon Snow",
    "email": "jonsnow@gmail.com",
    "phone": "(665)123-3454",
    "city": "Africa",
    "marks": 95
  },
  {
    "id": 2,
    "ename": "Alam Sho",
    "email": "alamsho@gmail.com",
    "phone": "(665)233-9854",
    "city": "New York",
    "marks": 65
  },
  {
    "id": 3,
    "ename": "Than Jho",
    "email": "thanjho@gmail.com",
    "phone": "(665)121-5454",
    "city": "New York",
    "marks": 45
  }
    
  ]);

  
    // const fetchData = () => {
    //   fetch('http://localhost:5000/cards')
    //     .then(res=> res.json())
    //     .then(data=>{
    //       setCards(data)
    //     })
    //     .catch(e=> console.log(e.messege))
    // }
    // useEffect(()=>{
    //   fetchData()
    // },[]);


  return (
    <div>
      <Header></Header>
      <div className="title">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">
                <i class="bi bi-house" id="icon"></i>
              </a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="dashboard-section">
        <div className="scrollable-content" style={{ maxHeight: '600px', overflowY: "auto" }}>
          <div className="row">
            {cards.map((card, index) => (
              <div className="col-sm-4" key={index}>
                <div class="card">
                  <div className="card-body">
                    <div className="icon-progress d-flex justify-content-between">
                      <i className="bi bi-person" style={{ fontSize: '30px', color: 'blueviolet' }}></i>
                      <Progress progress={card.marks} strokeWidth={25}  style={{height:"70px",width:"70px"}}/>
                      {/* <div className="progress-bar" role="progressbar"  aria-valuenow={card.marks} aria-valuemin="0" aria-valuemax="100">{card.marks}</div> */}
                    </div>
                    <h5 className="card-title">{card.ename}</h5>
                    <div class='d-flex justify-content-between'>
                    <p className="card-text">{card.email}</p>
                    <h6>{card.marks} %</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className='Revenue-generated d-flex'>
            <div class="col-md-6 py-2 ">
              <div class="card" className='bar-class'>
                <div class="card-body">
                  <h5 class="card-title">Revenue Generated</h5>
                  <p class="card-text">$59,342.32</p>
                  <Card></Card>
                </div>
              </div>
            </div>

            <div class="col-md-6 py-2 px-2 ">
              <div class="card" className='bar-class'>
                <div class="card-body">
                  <h5 class="card-title">Sales Quantity</h5>
                  <p class="card-text">Cheak out BarChart</p>
                  <Barchart></Barchart>
                </div>
              </div>
            </div>

          </div>
          <div className='d-flex'>
            <div class=" col-md-4 py-2 px-2 ">
              <div class="card" style={{ height: "381px" }} className='my-card-2'>
                <div class="card-body">
                  <h5 class="card-title">Campaign</h5>
                  <p class="card-text">Cheak out Progress</p>
                  <div class='d-flex align-items-center justify-content-center'>
                    <RadialChart></RadialChart>
                  </div>
                </div>
              </div>
            </div>




            <div class="my-folder col-md-4 py-2 px-2 ">
              <div class="card" style={{ height: "381px" }} className='my-card-2'>
                <div class="card-body">
                  <h5 class="card-title">Recent Transaction</h5>
                  <p class="card-text"></p>
                  <div class=''>

                    <div class="card m-1 mb-2" style={{ borderRadius: "0" }}>
                      <div class="card-body">
                        <div className='' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <h5 class="card-title">John</h5>
                          <h5>$2000</h5>
                          </div>
                        <p class="card-text">12-09-2024</p>

                      </div>
                    </div>
                    <div class="card m-1 mb-2" style={{ borderRadius: "0" }}>
                      <div class="card-body">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                          <h5 class="card-title">Amol</h5>
                          <h5>$5900</h5>
                        </div>
                        <p class="card-text">13-09-2024</p>

                      </div>
                    </div>
                    <div class="card m-1 mb-2" style={{ borderRadius: "0" }} >
                      <div class="card-body">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <h5 class="card-title">Manas</h5>
                          <h5>$9500</h5>

                        </div>
                        <p class="card-text">9-09-2024</p>

                      </div>
                    </div>





                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 py-2 px-2 ">
              <div  class="card" style={{ height: "381px" }} className='my-card-2' >
                <div class="card-body" >
                  <h5 class="card-title">Any Advice</h5>
                  <p class="card-text"></p>
                  <div class='d-flex align-items-center justify-content-center'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et similique laborum error Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus quidem, in minus recusandae quibusdam......

                    </p>
               
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </section>
    </div>
  );
};

export default Dashboard;










