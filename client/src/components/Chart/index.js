// Single chart component
import React from 'react';
import {Line} from 'react-chartjs-2';

import './Chart.css';

const Chart = ({datas, color, sensor}) => {

  const timeArray = [];
  for (let i = 0; i < 24; i++) {
    timeArray.push(i);
  }

  return (
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
          width={520}
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
