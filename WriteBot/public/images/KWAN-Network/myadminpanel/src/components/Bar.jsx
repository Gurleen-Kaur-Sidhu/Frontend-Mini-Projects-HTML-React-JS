

import React from 'react'
import ReactApexChart from "react-apexcharts";

import './Bar.css'
import Header from './header/Header';

const state = {
  series: [
    {
      name: "series 1",
      type: "column",
      data: [4857, 7289, 8108, 7899]
    },
    {
      name: "Series 2",
      type: "column",
      data: [680, 1108, 1200, 1098]
    },

    {
      name: "series 3",
      type: "line",
      data: [14, 15.2, 14.8, 13.9]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: "line"
    },
    colors: ["#318fb5", "#b0cac7", "#005086", "#f7d6bf", "#001244"],
    stroke: {
      width: [0, 4]
    },
    title: {
      text: "Bar"
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1, 2]
    },
    labels: [

      "2021",
      "2022",
      "2023",
      "2024"
    ],
    xaxis: {
      type: "category"
    },
    yaxis: [
      {
        seriesName: "1",
        title: {
          text: "series"
        },
        labels: {
          formatter: (value) => {
            return value + "series";
          }
        }
      },
      {
        seriesName: "2",
        show: false
      },
      {
        seriesName: "3",
        opposite: true,
        title: {
          text: "series"
        },
        labels: {
          formatter: (value) => {
            return value + "%";
          }
        }
      }
    ],
    legend: {
      position: "right",
      width: 128
    },
    tooltip: {
      shared: false
    }
  }
};


const Bar = () => {
  return (
    <div>
      <Header></Header>
      <div className='title'>
        <h1>Bar-Chart</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Barchart</li>
          </ol>
        </nav>

      </div>


      <div className='bar-section'>

        <div class="col-lg-12 py-2 px-2 ">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Campaign</h5>
              <p class="card-text">Cheak out Progress</p>
              <div class='d-flex align-items-center justify-content-center'>
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="line"
                  height={420}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default Bar

