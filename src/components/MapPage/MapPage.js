import React, {Component} from 'react'
import  mapboxgl from 'mapbox-gl'
import './MapPage.css'

class MapPage extends Component {

    map = null
    mapContainer = React.createRef()

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoicnVzbGFuZ2F5ZnV0ZGlub3YiLCJhIjoiY2syMHZvZWVhMDZoNzNjbnJjdGQyZGtybiJ9.3catVlDPe6oWV_zDzvdo4g";
        this.map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v9",
          center: [30.2656504, 59.8029126],
          zoom: 15
        });

        document.title = 'Карта | Loft Taxi';
      }

    render() {
        return <div className="container" ref={this.mapContainer} />
    }
}

export default MapPage