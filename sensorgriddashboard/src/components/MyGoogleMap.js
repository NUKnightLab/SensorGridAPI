import React from "react"
const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: '1000px' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 42.050691, lng: -87.67416 }}
  >
    <MarkerClusterer onClick={props.onMarkerClustererClick}  averageCenter  enableRetinaIcons  
    gridSize={60}>
      {props.markers.map(marker => (
        
        <Marker key={marker.sensor_id} position={{ lat: marker.latitude, lng: marker.longitude }}/>
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class MyGoogleMap extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com/`,
      `leleszel/b66529daed2700ea4b8bd52328b47201/raw/`,
      `bea1960b4d5228edbd81d20c030629cf72641d9c/SensorLocations.json`
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.sensors });
        console.log("success");
        console.log(this.state.markers)
      });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}

export default MyGoogleMap
