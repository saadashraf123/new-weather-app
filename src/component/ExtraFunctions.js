import React from 'react'

const ExtraFunctions = () => {

    const FarenhietToDegree = (temp) => {
        const tempInDegree = Math.round(temp - 273)
        return tempInDegree
    }
    const getIcon = (range) => {
        switch (true) {
            case range >= 200 && range <= 232:
                return "fas fa-bolt";

            case range >= 300 && range <= 321:
                return "fas fa-cloud-drizzle";

            case range >= 500 && range <= 531:
                return "fas fa-cloud-showers-heavy";

            case range >= 600 && range <= 622:
                return "fas fa-snowflake";

            case range >= 701 && range <= 781:
                return "fas fa-cloud";

            case range === 800:
                return "fas fa-cloud-sun";

            case range >= 800 && range <= 804:
                return "fas fa-cloud";
        }
    };
    const feels = (feel) => {
        const feelsAvg = (feel.day + feel.night + feel.morn + feel.eve) / 4;
        return feelsAvg;
    };
    const minmaxTemp = (min, max) => {
        return (
            <>
                <span>Min: {min}&deg;C</span>&nbsp;&nbsp;
                <span>Max: {max}&deg;C</span>
            </>
        );
    };

    return [FarenhietToDegree, getIcon, feels, minmaxTemp]
}

export default ExtraFunctions


