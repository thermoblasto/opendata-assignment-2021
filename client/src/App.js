import React, { useState, useEffect } from 'react';

import axios from 'axios';
import LineChart from './components/LineCharts';
import Header from './components/Header';
import './App.css'
import 'react-vis/dist/style.css';

const getOpenData = async () => {
  const response = await axios.get('/api/data');
  return response.data;
};

const App = () => {
  const [openData, setOpenData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  useEffect(() => {
    getOpenData().then((data) => {
      setOpenData(data);
    });
  }, []);

  const filteredData = openData.filter((data) => {
    const date = new Date(data.createdAt).getDate();
    return date === selectedDate;
  });


  const handleDate = (e) => {
    setSelectedDate(Number(e.target.value));
  };

  const restructureData = (sensor) => {
    return filteredData.map((data) => ({
      x: new Date(data.createdAt).getHours(),
      y: data[sensor] ? data[sensor] : 0,
    }));
  };

  return (
    <div className='App'>
      <Header handleDate={handleDate} selectedDate={selectedDate} />
      <LineChart data={restructureData} />
    </div>
  );
};

export default App;
