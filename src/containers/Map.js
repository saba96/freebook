import { connect } from 'react-redux';
import Map from '../components/Map';


const mapStateToProps = (state) => {
  return { markers : state.foundBooks === null ? [] : state.foundBooks };
}

export default connect(mapStateToProps)(Map);
