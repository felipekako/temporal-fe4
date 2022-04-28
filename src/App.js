import { useState } from 'react';
import './App.css';

const api = {
  key: "dbef3485a8fa1a134e9419c78c995b66",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query,setQuery] =useState('');
  const [weather,setWeather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }
  const dateBuilder=(d)=>{
    let months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto",
    "Setembro", "Outubro","Novembro","Dezembro"];
    let days= ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }  

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? 'App calor' : 'App') : 'App'}>
      <main>
        <div className="search-box">
        <input 
            type="text"
            className="search-bar"
            placeholder="Digite a cidade..."
            onChange={e => setQuery(e.target.value)}
            value={query}    
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}ºC
                </div>
                <div className="weather">{weather.weather[0].description}</div>
              </div>
            </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;