import { connect } from 'react-redux';
import Map from '../components/Map';


const mapStateToProps = (state) => {
  let markers = [];
  if(state.ISBN !== "" && state.bookInfo.hasOwnProperty('ISBN')){
    markers.push(state.bookInfo);
    return {markers};
		}
		if(state.ISBN !== "" && (state.bookInfo.hasOwnProperty('notfound'))){
    return {markers};
  }
  for (let prop in state.records) {
    markers.push({
      ISBN: state.records[prop].ISBN,
      name: state.records[prop].name,  
      latitude: Number(state.records[prop].latitude),
      longitude: Number(state.records[prop].longitude),
      category: state.records[prop].category
    });
  } 

  return { markers : markers };
}

export default connect(mapStateToProps)(Map);