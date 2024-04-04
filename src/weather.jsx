import react from 'react';
import axios from 'axios';

const Weather = () => {
  return (
    <div> 
    

<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
  <header className="masthead mb-auto">
    <div className="inner">
      
    </div>
  </header>

  <main role="main" className="inner cover">

    <h1 className="cover-heading">Kobby's Weather App.</h1>
    <div className="row">
    <div className="col-md-8 border-2">
      <input type="text"  className="form-control" placeholder='Search City Name' />
    </div>

    <div className="col-lg-4 col-md-4">
    <div className="search-bar"> 
      <a href="#"  className="btn btn-lg btn-secondary">Search</a>
    </div>
    </div>

    </div>

    <p className="lead">Temperature: 30 celsius</p>
    <p className="location-bar">Location: Saint Louis</p>
    <p className="wind-bar">Windspeed: Saint Louis</p>
    <p className="humidity-bar">time: 2:00pm </p>
    <p className="rain-bar">rainIntensity: 1.05,</p>
  
    
    
  </main>

  <footer className="mastfoot mt-auto">
    <div className="inner">
      <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    </div>
  </footer>
  </div>
    
    
    </div>
   
  )
};

export default Weather;
