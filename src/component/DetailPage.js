import React from 'react'
import useFetch from './useFetch';
import ExtraFunctions from './ExtraFunctions'
import moment from "moment";
import { Link } from "react-router-dom";
import Button from './Button';

const DetailPage = ({ cityName }) => {
    const [arr] = useFetch();
    const [FarenhietToDegree, getIcon] = ExtraFunctions()
    const newArr = Object.entries(arr);
    // console.log(arr);

    return (
        <div className=''>
            {
                newArr.length ?
                    (<div className="row">
                        {arr.daily.map((item, index) =>
                            <div key={index} className='dayItems col-lg-3 col-md-6 col-sm-12'>
                                <div className="card cards">
                                    <div className="card-header">
                                        {moment.unix(item.dt).format("LL")}
                                    </div>
                                    <div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <i className={`${getIcon(item.weather[0].id)} icon`}></i><br />
                                                Sky: {item.weather[0].main}
                                            </li>
                                            <li className="list-group-item">Temperature: {FarenhietToDegree(item.temp.max)}&deg;C</li>
                                            <li className="list-group-item">Feels Like: {FarenhietToDegree(item.feels_like.day)}&deg;C</li>
                                            <li className="list-group-item">Dew Point: {FarenhietToDegree(item.dew_point)}&deg;</li>
                                        </ul>
                                    </div>
                                    <Button index={index} item={item} cityName={cityName} />
                                </div>
                            </div>
                        )}
                    </div>)
                    : (<div className="loader"></div>)
            }
        </div>
    )
}

export default DetailPage