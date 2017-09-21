import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = withGoogleMap(props => {
  let currentLocation = null;
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      currentLocation = {
        lat: coords.latitude,
        lng: coords.longitude
      }
      props.onRecvCurrentLocation(currentLocation);
    })
  }

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 35.6895, lng: 139.69171}}
      center={ props.userLocation }
    >
      <Marker
        position = { props.userLocation }
        icon = {{
          url: 'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png',
        }}
      />
      { props.markers.map((marker, idx) => (
        <Marker key = { idx }
          position = { {
            lat: marker.location.latitude,
            lng: marker.location.longitude
          } }
        />
      )) }
    </GoogleMap >
  )
});

class Map extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <MyMap
          containerElement={
            <div style={{ height: `300px` }} />
          }
          mapElement={
            <div style={{ height: `300px` }} />
          }
          markers={ this.props.markers }
          userLocation={ this.props.userLocation }
          onRecvCurrentLocation={ this.props.onRecvCurrentLocation }
        />
      </div>
    )
  }
};

export default Map;
