import React from 'react'
import { Link } from 'react-router-dom';


const Button = ({ item, cityName }) => {
    return (
        <Link className='btn' to="/fullPageDetails" state={{ arr: item, cityName: cityName }}>
            View Full Page Details
        </Link>
    )
}

export default Button