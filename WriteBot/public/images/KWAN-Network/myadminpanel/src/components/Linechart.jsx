import React from 'react'
import './Linechart.css'
import Chart from "react-apexcharts";
import Header from './header/Header';


const Linechart = () => {


  const options = {
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "oct", "nov", "dec"]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 34, 45, 30, 20],
      color: "black"
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19,]
    },
    {
      name: "series-3",
      data: [24, 20, 5, 75, 42, 79, 72, 35]
    }
  ];
  return (

    <div>
      <Header></Header>
      <div className='title'>
        <h1>Line-Chart</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Linechart</li>
          </ol>
        </nav>

      </div>

      <section className='linechart-section'>
        <div class="col-lg-12 py-2 px-2 ">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Revenue Generated</h5>
              <p class="card-text">$59,342.32</p>
              <div class='d-flex align-items-center justify-content-center'>
                <Chart options={options} series={series} type="area" height={420} width={1000} />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Linechart
