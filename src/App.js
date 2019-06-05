import logo from './logo.svg';

import React, { Component } from "react";
import Chart from "react-apexcharts";
import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var ts2 = 1484418600000;
var dates = [];
var dates2 = [];
var dates3 = [];
var spikes = [5, -5, 3, -3, 8, -8]
for (var i = 0; i < 500; i++) {
  ts2 = ts2 + 86400000;
  const dep = getRandomInt(100)
  var innerArr = [ts2,2000+getRandomInt(500)];
  var innerArr2 = [ts2,dep ];
  var innerArr3 = [ts2,dep + 20];
  dates.push(innerArr)
  dates2.push(innerArr2)
  dates3.push(innerArr3)
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "line",
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true
          }
        },
        stroke: { 
          curve: 'smooth',
        width: 1
        
        },
        dataLabels: {
          enabled: false
        },

    
        title: {
          text: 'Stock Price Movement',
          align: 'left'
        },
      

        yaxis: [
          {
            seriesName: "Price",
            opposite: true,

            labels: {
              style: {
                color: '#008FFB',
              }
            },
            title: {
              text: "data1",
             
            },
            tooltip: {
              enabled: true
            }
          },
  
          {
            seriesName: "Volume",

            min: 0,
            max: 500,

            labels: {
             
            },
            title: {
              text: "Volume",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: "Volume",
            min: 0,
            max: 500,
            show: false
          }
       
        ],
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
      }

    }

     this.state.series = [{
        name: "Price",
        data: dates
      },
      {
        name: "Real Volume",
        type: 'area',
        data: dates2
      },
      {
        name: "Change Volume",
        type: 'area',
        data: dates3
      },
    ]
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              width="500"
            />
             

          </div>
        </div>
      </div>
    );
  }
}

export default App;