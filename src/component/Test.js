
import { GoogleComponent } from 'react-google-location'

import React, { useState } from 'react';

const API_KEY = "AIzaSyAak-gKQbGzp-87ifm5j4n8OYa8OzhQqII"

const Test = () => {
    const [check, setCheck] = useState({})
    console.log(check);
    return (
        <div>
            <GoogleComponent

                apiKey={API_KEY}
                language={'en'}
                country={'country:in|country:us'}
                coordinates={true}
                placeholder={'Start typing location'}
                onChange={(e) => { setCheck(e) }} />
        </div >

    )
}


export default Test;
