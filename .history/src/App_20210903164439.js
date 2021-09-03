import './App.css';
// import MapsComponent from './components/mapsComponent';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

function Map(){
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat:10, lng:10 }} />
  )
}

const REACT_APP_GOOGLE_KEY="AIzaSyDfxTqDdWgDwR8taa_0lHnsQMp3jIcZIZU";

const WrappedMap = withScriptjs(withGoogleMap(Map))

function App() {
  return (
    <div style={{width:'100vw', height:'100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
