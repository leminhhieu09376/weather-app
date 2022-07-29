
import './App.css';
import InputSearch from './inputSearch';
import Content from './content';
import { useState } from 'react';
function App() {
  const [getValue, setGetValue] = useState([{
    name: "",
    country: "",
    time: "",
    visibility: "",
    wind: "",
    humidity: "",
    temp: "",
    description: "",
    time: "",
    date: "",
    month: "",
    year: "",
    hours: "",
    minutes: "",
    seconds: "",

  }])

  return (
    <div className={`body ${getValue.temp < 20 && 'cold' || getValue.temp < 25 && 'cool' || getValue.temp < 30 && 'warm' || getValue.temp > 30 && 'hot'}`}>
      <div className='weather-app'>
        <InputSearch setGetValue={setGetValue} getValue={getValue} />
        <Content getValue={getValue} />
      </div>
    </div>
  );
}

export default App;
