import React from 'react'

const Datas = ({data,tempd,icondata}) => {
    const str = `${data.country}`;
    const s = str.toLowerCase();
    //https://openweathermap.org/img/wn/${icondata.icon}@4x.png
    const logo = `https://weather-munn.herokuapp.com/${icondata.icon}.png`;
    const clogo = `https://flagicons.lipis.dev/flags/4x3/${s}.svg`;

  return (
    <div>
      <div className='city'>
        <h1 className='county'>{data.name} <img className='clogo' src={clogo} alt="#"/></h1>
        <img src={logo} alt='logo'/>
        <h1>{Math.round(tempd.temp)}° Cel</h1>
      </div>
      <div className='tempDetails'>
        <span>
            <p>{tempd.temp_max}° C</p>
            <p>MaxTemp</p>
        </span>
        <span>
            <p>{tempd.temp_min}° C</p>
            <p>MinTemp</p>
        </span>
        <span>
            <p>{tempd.humidity}° C</p>
            <p>Humidity</p>
        </span>
      </div>
    </div>
  )
}

export default Datas
