import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { GOOGLE_MAPS_KEY } from '../utils/credentials';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3&key=${GOOGLE_MAPS_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div
            style={{height: window.innerHeight - 50}}/>,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {props.locations.map((marker) => (
      <Marker key={marker.id}
        icon={marker.isMarkerShown ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }
        position={{lat: marker.lat, lng: marker.lng}}
        onClick={() => props.OnMarkerClick(marker) }>

        {marker.isMarkerShown &&
          <InfoWindow
            key={marker.id}
            onCloseClick={() => props.OnMarkerClick(marker)}>
              <div>
                <p>{marker.name}</p>
                <p>{marker.formattedAddress}</p>
              </div>
          </InfoWindow>}
      </Marker>
    ))}
  </GoogleMap>
)

export default MapComponent
