import React, {FunctionComponent, useEffect, useState} from "react";

const GeoLocation : FunctionComponent = () => {

    const initialState = {
        coords : {
            latitude: null,
            longitude: null,
        }
    }

    const [position,setPosition] = useState(initialState);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(originalPosition => {
                setPosition(originalPosition);
            });
        }
    }, []);

    const renderLocation = (<>
        <div><b>Latitude: </b>{position.coords.latitude}</div>
        <div><b>Longitude: </b>{position.coords.longitude}</div>
    </>);

    const renderNotEnabled = (<div><b>Location not enabled</b></div>);

    return((position.coords.latitude && position.coords.longitude) ? renderLocation : renderNotEnabled);
}

export default GeoLocation;