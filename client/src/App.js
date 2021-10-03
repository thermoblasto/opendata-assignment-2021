import React, { useState, useEffect } from 'react';

import axios from 'axios';
import LineChart from './components/LineCharts';
import ChooseTime from './components/ChooseTime';
import './App.css'

const getRawData = async () => {
  const response = await axios.get('http://localhost:5000/api/data');
  return response.data;
};

const App = () => {
  const [rawData, setRawData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  useEffect(() => {
    getRawData().then((data) => {
      setRawData(data);
    });
  }, []);

  //This function will handle the date selection from application
   const handleDate = (e) => {
     setSelectedDate(Number(e.target.value));
   };

   //This function will fetch selected date data
  const filteredData = rawData.filter((data) => {
    const date = new Date(data.createdAt).getDate();
    return date === selectedDate;
  });

  // This function will structure the data in the form needed for charts
  const structuredData = (sensor) => {
    return filteredData.map((data) => ({
      x: new Date(data.createdAt).getHours(),
      y: data[sensor] ? data[sensor] : 0,
    }));
  };

  return (
    <div className='App'>
      <ChooseTime handleDate={handleDate} selectedDate={selectedDate} />
      <LineChart data={structuredData} />
    </div>
  );
};

export default App;
