import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(input) {
    const [arr, setArr] = useState([])
    const [city, setCity] = useState("")

    const APIkey = "f28836b7dcdf328bc7bd5047a2a7e35a";

    useEffect(() => {
        if (!input) {
            navigator.geolocation.getCurrentPosition(function (position) {
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely,hourly&appid=${APIkey}`
                    )
                    .then((response) => {
                        setArr(response.data);
                        setCity(response.data.timezone)
                    }).catch(function (error) {
                        console.log(error);
                    });
            });
        }
        else {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIkey}`
                )
                .then((response) => {
                    axios
                        .get(
                            `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely,hourly&appid=${APIkey}`
                        )
                        .then((response) => {
                            setArr(response.data);
                            setCity(input)
                        }).catch(function (error) {
                            console.log(error);
                        });
                })
        }
    }, [input])

    return [arr, city]
}

export default useFetch