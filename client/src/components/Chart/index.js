import React from 'react';
import {Line} from 'react-chartjs-2';
import 'react-vis/dist/style.css';

import './Chart.css';

const Chart = ({datas, color, sensor}) => {

  const timeArray = [];
  for (let i = 0; i <= 24; i++) {
    timeArray.push(i);
  }

  return (
    console.log(datas),
    (
      <div class='chart_container'>
        <Line
          data={{
            labels: timeArray,
            datasets: [
              {
                label: sensor,
                data: datas,
                borderColor: color,
                backgroundColor: color,
              },
            ],
          }}
          width={490}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Time in hrs',
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Sensor Reading',
                },
               
              },
            },
          }}
        />
      </div>
    )
  );
};

export default Chart;
