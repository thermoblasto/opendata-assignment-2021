import React from 'react';
import Chart from '../Chart';

import './LineCharts.css';

const LineChart = ({ data }) => {
  return (
      <>
      <h2>Data collected from all 4 sensors</h2>
    <div className='linechart_container'>
    
    <Chart datas={data('sensor1')} color='#edde0e' sensor='Sensor 1' />

    <Chart datas={data('sensor2')} color='#03fcdf' sensor='Sensor 2' />

    <Chart datas={data('sensor3')} color='#ed0ed3' sensor='Sensor 3' />

    <Chart datas={data('sensor4')} color='#ed3e0e' sensor='Sensor 4' />
    </div>
    </>
  );
};

export default LineChart;
