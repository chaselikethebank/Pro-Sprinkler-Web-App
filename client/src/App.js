import "./App.css";
import Main from "./components/Nav";
import Location from "./components/Location";
import Forecast from "./components/Forecast";
import { useState, useEffect } from "react";
// import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Schedule from "./components/Schedule";
import Historical from "./components/Historical";

function App() {
  const [local, setLocal] = useState(["Kingwood", "77345"])
  const [forecast, setForecast] = useState([]);
  const [temp, setTemp] = useState([]);
  const [latLon, setLatLon] = useState([]);
  const [lat, setLat] = useState([latLon.latitude])
  const [lon, setLon] = useState([latLon.longitude])
  const [APIKeyForecast, setAPIKeyForecast] = useState("00abd67100886d6a01f4694628c12152")

  // let shortLat = Math.round((latLon.lattitude) * 100) / 100
  // console.log(shortLat)
  // console.log(latLon)
  // constol.log(latLon.latitude)
  // console.log(lat)
  // console.log(lon)

  

  function getCord() {
    fetch(
      `https://api.myptv.com/geocoding/v1/locations/by-address?locality=${local[0]}&postalCode=77345`,
      {
        method: "GET",
        headers: {
          apiKey:
            "OTc0MDk4N2VjN2FhNDZhMTkyYzhiMDFmNWIzMDlhNDU6ODVjYWM1ZWMtMWVhNi00NjdhLTkzZGYtMzdlZjdmYzNkYmYx",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setLatLon(result.locations[0].referencePosition));
  }
  useEffect(getCord, []);
  // console.log(latLon);

  function getForecast() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=29&lon=-95&appid=${APIKeyForecast}&units=imperial`
    )
    .then((res) =>res.json())
    .then((data) => setForecast(data.weather))
  }
  useEffect(getForecast, []);
  // console.log(forecast)

  function getTemp() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=29.64&lon=-95.28&appid=${APIKeyForecast}&units=imperial`
    )
    .then((res) =>res.json())
    .then((data) => setTemp(data))
  }
  useEffect(getTemp, []);
  // console.log(temp)

  

  const renderForecast = forecast.map((weather) => (
    <Forecast local={local} key={forecast.id} forecast={forecast} temp={temp}/>
  ));

// search






  // const handleAddressChange = (passData) => {
  //   console.log(passData);
  // };
  return (
    <div className="main">
      <Main 
      // onAddressChange={handleAddressChange} 
      />
      {/* <Location /> */}
      {/* {renderForecast} */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <Historical />
      <Schedule />
    </div>
  );
}

export default App;
