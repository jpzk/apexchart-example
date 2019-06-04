import logo from './logo.svg';

import React, { Component } from "react";
import Chart from "react-apexcharts";
import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var ts2 = 1484418600000;
var dates = [];
var spikes = [5, -5, 3, -3, 8, -8]
for (var i = 0; i < 3000; i++) {
  ts2 = ts2 + 86400000;
  var innerArr = [ts2,getRandomInt(500)];
  dates.push(innerArr)
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          }
        },
        dataLabels: {
          enabled: false
        },

        markers: {
          size: 0,
          style: 'full',
        },
        //colors: ['#0165fc'],
        title: {
          text: 'Stock Price Movement',
          align: 'left'
        },
      
        yaxis: {
          min: 0,
          max: 1000,
          labels: {
            formatter: function (val) {
              return (val).toFixed(0);
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },

        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val).toFixed(0)
            }
          }
        }
      },
      series: [{
        name: 'XYZ MOTORS',
        data: dates
      }],
    }
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;