import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs"
const InputSearch = ({ setGetValue, getValue }) => {
    const [inputValue, setInputValue] = useState("")
    const [inputSearch, setInputSearch] = useState("hanoi")
    const [error, setError] = useState(false)
    const handleOnsubmit = (e) => {
        e.preventDefault()
        setInputSearch(inputValue)
    }
    const fetchAPI = async () => {
        try {
            const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid={key}`)

            setGetValue({
                ...getValue,
                name: response.data.name,
                country: response.data.sys.country,
                visibility: response.data.visibility,
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
                temp: Math.round((response.data.main.temp - 273.15)),
                description: response.data.weather[0].description,
                date: (new Date()).getDate(), month: (new Date()).getMonth(),
                year: (new Date()).getFullYear(),
                hours: (new Date()).getHours(),
                minutes: (new Date()).getMinutes(),
                seconds: (new Date()).getSeconds(),

            })
        } catch (error) {
            setError(true)
        }

    }
    useEffect(() => {
        fetchAPI()
    }, [inputSearch])

    return (

        <div id='weather-input'>
            <div className='search-container'>
                <form onSubmit={handleOnsubmit}>
                    <input type="text" className='search' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <BsSearch className='search-icon' />
                </form>
            </div>

        </div>

    )
}

export default InputSearch