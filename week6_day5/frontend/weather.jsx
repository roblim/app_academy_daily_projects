import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      weather: {name: '', weather: [{}]}
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      this.setState({position});
      let request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=676edbe7d087f0f569337d39b85d309c`, true);

      request.onload = () =>  {
        if (request.status >= 200 && request.status < 400) {
          //SUCCESS!
          let weather = JSON.parse(request.responseText);
          this.setState({weather});
        } else {
          console.log("ERROR WITH WEATHER THING");
        }
      };

      request.onerror = function() {
        console.log('Error with weather stuff');
      };
      request.send();
    });
  }

  render() {
    let weather = this.state.weather;
    console.log(weather);
    // console.log(JSON.parse(weather));
    console.log(this.state.weather.weather);
    return (
      <div className="weather">
        <h1>Current Weather for <span className="city">{weather.name}</span></h1>
        <div><marquee>{weather.weather[0].description}</marquee></div>
      </div>
    );
  }
}

export default Weather;
