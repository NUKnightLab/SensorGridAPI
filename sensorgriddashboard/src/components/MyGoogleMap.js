import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px`, width: `1000px`,
        position: `relative`,
        top: `50px`, left: `300px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 42.05, lng: -87.67 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 42.05, lng: -87.67 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
    )

class MyGoogleMap extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMarkerShown: false,
        }
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker() {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick () {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}

export default MyGoogleMap