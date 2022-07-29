import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { BsWind } from 'react-icons/bs'
import { BsCloudSun } from 'react-icons/bs'
const Content = ({ getValue }) => {
    return (
        <div className='content'>
            <h1 className='cappital'>
                <span className='city'>{getValue.name} , </span>
                <span className='country'>{getValue.country}</span>
            </h1>
            <div className="time">{getValue.date}/{getValue.month}/{getValue.year}, {getValue.hours}:{getValue.minutes}:{getValue.seconds}</div>
            <div className="temperature">
                <span className='value'>{getValue.temp} <sup>o</sup>C</span>
            </div>
            <div className="short-description">{getValue.description}</div>
            <div className="more-description">
                <div className="visibility">
                    <i>  <FaRegEye /></i>
                    <span>{getValue.visibility}m</span>
                </div>
                <div className="visibility">
                    <i>  <BsWind /></i>
                    <span>{getValue.wind} (m/s)</span>
                </div>
                <div className="visibility">
                    <i>  <BsCloudSun /></i>
                    <span>{getValue.humidity} (%)</span>
                </div>
            </div>
        </div>
    )
}

export default Content