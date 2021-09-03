import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

const MapsComponent = () => {
    return (
        <>
            <GoogleMap defaultZoom={10} defaultCenter={{ lat:10, lng:10 }} />
        </>
    )
}
export const WrappedMap = withScriptjs(withGoogleMap(MapsComponent))

export default MapsComponent
