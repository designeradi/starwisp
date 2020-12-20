import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import Notifications from './Notifications'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 50, 48, 58, 60, 56, 55]
    }
  ]
};

export default class LineDemo extends Component {
  render() {
    return (
      <div id="chart">
        <div>
          <h2>Line Example</h2>
          <Line options={{
              responsive: true,
              maintainAspectRatio: true,
            }} ref="chart" data={data} width="500" height="300" />
        </div>
        <div id="notifs">
          <Notifications />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}