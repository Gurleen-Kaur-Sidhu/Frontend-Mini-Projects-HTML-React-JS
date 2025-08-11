import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            // startAngle: -180,
            // endAngle: 180,

            track: {
              background: "#f2f2f2",
              strokeWidth: "97%"
            },
            dataLabels: {
              show: true,
              value: {
                show: true,
                fontSize: "16px"
              },
              total: {
                show: true,
                label: "$48,352 Revenue",
                color: "#373d3f"
              }
            }
          }
        }
      },

      series: [75]
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="380"
        />
      </div>
    );
  }
}

export default RadialChart;