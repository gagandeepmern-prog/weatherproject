



import { useEffect, useState, useRef} from 'react';
// import logo from '/cloud.png';
// import './App.css';


function Hero() {
  const inputRef=useRef();
  const [weather, setWeather]=useState(false);
   const [city, setCity] = useState("Delhi");
  const API_key="50a5754614d571948ae380c6fbb5c9d1";

  const search = async(city)=>{
    try{
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;
     const response=await fetch(url);
     const data=await response.json();
     console.log(data);

      setWeather({
       humidity:data.main.humidity,
       temp:Math.floor(data.main.temp),
       windspeed:data.wind.speed,
      //  locagit remote add origin https://github.com/gagan5511-max/neww.gittion:data.name
      })
    }
    catch(error)
    {
    }
  }

    const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    search(city);
  };

  useEffect(()=>{
    search("Delhi");
  },[])
  return (
  <>
  <form onSubmit={handleSubmit}>
    <input type="search" onChange={(e) => setCity(e.target.value)}  placeholder="Search Location" ref={inputRef}/>
    {/* <img src={logo} alt="logo" width="35" height="35" onClick={()=>search(inputRef.current.value)}/> */}
      <button type="submit"> Check Weather
          {/* <img src={} alt="logo" width="35" height="35" /> */}
        </button>
    <h4> Wind Speed : {weather.windspeed} ms</h4>
    <h4> Tempature : {weather.temp} *C</h4>
    <h4> Humidity: {weather.humidity} % </h4>
    <h3> location: {weather.location}</h3>
     </form>
  </>
  );
}
export default Hero;




