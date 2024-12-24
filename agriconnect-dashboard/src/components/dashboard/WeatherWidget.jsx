import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


export default function WeatherWidget(){
    const [city,setCity] = useState('');
    const [currentWeather,setCurrentWeather] = useState(null);
    const [forecast,setForecast] = useState(null);
    const [loading,setLoading] =useState(false);
    const [error,setError] = useState(null);
    const getWeather = async () => {
        if(!city) return;
        setLoading (true);
        setError(null);
        try{
            const [currentRes,forecastRes] = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},ET&appid=${API_KEY}&units=metric`),
                    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},ET&appid=${API_KEY}&units=metric`)
                        ]);
                setCurrentWeather(currentRes.data);
                setForecast(forecastRes.data);
            ])
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default WeatherWidget
