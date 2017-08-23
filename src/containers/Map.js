import { connect } from 'react-redux';
import Map from '../components/Map';
import { setUserLocation } from '../actions/Map';

const mapDispatchToProps = (dispatch) => {
  return {
    onRecvCurrentLocation: (location) => dispatch(setUserLocation(location))
  }
}

const mapStateToProps = (state) => {
  return {
    markers : state.foundBooks === null ? [] : state.foundBooks,
    userLocation: state.userLocation
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
