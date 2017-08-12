import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';

const MyMap = withGoogleMap(props => {
  //	let currentLocation = null;
	// if (navigator && navigator.geolocation) {
	// 	navigator.geolocation.getCurrentPosition((pos) => {
	// 		const coords = pos.coords;
	// 		currentLocation = {
	// 			lat: coords.latitude,
	// 			lng: coords.longitude
	// 		}
	// 	})
	// }
	
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{lat: 35.6895, lng:139.69171}}
		>
		 {props.markers.map((marker, idx) => (
      <Marker key = {idx}
        position = {{lat : marker.latitude, lng: marker.longitude }}
      />
      ))}
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
					markers={this.props.markers}
				/>
			</div>
		)
	}
};


export default Map;