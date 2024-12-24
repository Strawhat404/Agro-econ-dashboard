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
                setForecast(forecastRes.data); } catch (err) {
                    setError('Error fetching weather data. please try again.', err);
                    console.error('Error:',err);
                }finally {
                    setLoading(false);
                }
                }
            return (
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex gap-4 mb-6">
                        <input type="text" value={city} onChange = {(e) => setCity(e.target.value)}
                        placeholder='Enter city name' className="flex-1 px-4 py-2 border rounded-md" />
                        <button onClick = {getWeather}
                        disabled = {loading} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
                            {loading ? 'Loading...' : 'Get Weather'}
                        </button>
                    </div>
                    {error && (
                        <div className="text-red-500 mb-4">{error}</div>
                    )}
                    {currentWeather &&}
                </div>
            )
            
        }
    }
  
  )
}

export default WeatherWidget
