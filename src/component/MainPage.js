import React, { createContext, useState } from 'react'
import Weather from './Weather';
import useFetchCities from './useFetchCities';



const MainPage = () => {
    const [cityName, setCityName] = useState("");
    const [city] = useFetchCities(cityName);
    // console.log(test);
    return (
        <div className=' container'>
            <div className='cityInput'>
                <select className="form-control w-50" name="cities" id="cities" value={cityName} onChange={(e) => setCityName(e.target.value)}>
                    <option>Select a City</option>
                    {city.length ?
                        city.map((item) =>
                            <option key={item.id} value={item.name}>{item.name}</option>
                        )
                        : <option>No Cities Found</option>
                    }
                </select>
            </div>
            <Weather cityName={cityName} />
        </div>
    )
}

export default MainPage