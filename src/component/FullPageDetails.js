import React from 'react'
import moment from "moment";
import { Link } from 'react-router-dom';
import ExtraFunctions from './ExtraFunctions'
import useFetch from './useFetch';
import { useLocation } from 'react-router-dom';

const FullPageDetails = () => {
    const location = useLocation();
    const [arr, city] = useFetch();
    const details = location.state.arr;
    const cityName = location.state.cityName;

    const [FarenhietToDegree, getIcon, feels, minmaxTemp] = ExtraFunctions()
    return (
        <div className='container'>
            {details ? (
                <div className='card cards'>
                    <div className='card-header'>
                        <h1>{cityName ? cityName : city}</h1>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Date: {moment.unix(details.dt).format("LL")}</li>
                        <li className="list-group-item"><h5>
                            <i className={`${getIcon(details.weather[0].id)} icon`}></i><br />
                            Sky: {details.weather[0].main}
                        </h5></li>
                        <li className="list-group-item">Temperature:  {FarenhietToDegree(details.temp.day)}&deg;C</li>
                        <li className="list-group-item">Feels Like:  {FarenhietToDegree(feels(details.feels_like))}&deg;C</li>
                        <li className="list-group-item">Description: {details.weather[0].description}</li>
                        <li className="list-group-item">
                            {minmaxTemp(
                                FarenhietToDegree(details.temp.min),
                                FarenhietToDegree(details.temp.max)
                            )}
                        </li>
                        <li className="list-group-item">Dew Point:{" "}
                            {details.dew_point > 273
                                ? FarenhietToDegree(details.dew_point)
                                : 0}
                            &deg;
                        </li>
                        <li className="list-group-item">Sky:  {details.weather[0].main}</li>
                        <li className="list-group-item">Pressure:  {details.pressure} mb</li>
                        <li className="list-group-item">Humidity:  {details.humidity}%</li>
                        <li className="list-group-item">Sunrise: {moment.unix(details.sunrise).format("LT")}</li>
                        <li className="list-group-item">Sunset: {moment.unix(details.sunset).format("LT")}</li>
                    </ul>
                </div>
            ) : (
                <div className="loader"></div>
            )}
            <br />
            <Link className='btn' to="/" state={{ cityName: cityName }}>Go Back</Link >
        </div>
    );
}

export default FullPageDetails