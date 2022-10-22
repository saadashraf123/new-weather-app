import useFetch from './useFetch';
import ExtraFunctions from './ExtraFunctions'
import DetailPage from './DetailPage';
import moment from "moment";


const Weather = ({ cityName }) => {

    const [arr, city] = useFetch(cityName);
    const [FarenhietToDegree, getIcon] = ExtraFunctions()
    return (
        <>
            <div className=''>
                {arr && Object.keys(arr).length ?
                    <div className="card cards">
                        <div className="card-header">
                            {city ? city : arr.timezone}
                        </div>
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Temperature:  {FarenhietToDegree(arr.current.temp)}&deg;C</li>
                                <li className="list-group-item">
                                    <i className={`${getIcon(arr.current.weather[0].id)} icon`}></i><br />
                                    Sky: {arr.current.weather[0].main}
                                </li>
                                <li className="list-group-item">Feels Like:  {FarenhietToDegree(arr.current.feels_like)}&deg;C</li>
                                <li className="list-group-item">Dew Point:  {FarenhietToDegree(arr.current.dew_point)}&deg;</li>
                                <li className="list-group-item">Pressure:  {arr.current.pressure} mb</li>
                                <li className="list-group-item">Humidity:  {arr.current.humidity}%</li>
                                <li className="list-group-item">Sunrise: {moment.unix(arr.current.sunrise).format("LT")}</li>
                                <li className="list-group-item">Sunset: {moment.unix(arr.current.sunset).format("LT")}</li>
                            </ul>
                        </div>
                        <DetailPage cityName={cityName} />
                    </div> : <div className="loader"></div>
                }
            </div>
        </>
    )
}

export default Weather