import React, { useState, useEffect } from 'react'
import axios from 'axios'


const useFetchCities = () => {
    const [city, setCity] = useState([])
    useEffect(() => {
        const APIKEY = "MEV4WlFMeHpsYTBQaFJvWmk3akZKcmhwWkpZVjUwYWRNcnZCUXdUaw=="
        const config = {
            method: 'get',
            url: 'https://api.countrystatecity.in/v1/countries/IN/cities',
            headers: {
                'X-CSCAPI-KEY': 'MEV4WlFMeHpsYTBQaFJvWmk3akZKcmhwWkpZVjUwYWRNcnZCUXdUaw=='
            }
        }
        axios(config)
            .then(function (response) {
                setCity(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    return [city]
}

export default useFetchCities