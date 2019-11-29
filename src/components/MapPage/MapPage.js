import React, {Component} from 'react'
import  mapboxgl from 'mapbox-gl'
//import 'mapbox-gl/dist/mapbox-gl.css'
import './MapPage.css'

const getRouteOpts = coordinates => ({
  id: 'route',
  type: 'line',
  source: {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates
      }
    }
  },
  layout: {
    'line-join': 'round',
    'line-cap': 'round'
  },
  paint: {
    'line-color': '#c2423a',
    'line-width': 8
  }
});

class MapPage extends Component {

    map = null
    mapContainer = React.createRef()

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoicnVzbGFuZ2F5ZnV0ZGlub3YiLCJhIjoiY2syMHZvZWVhMDZoNzNjbnJjdGQyZGtybiJ9.3catVlDPe6oWV_zDzvdo4g";
        this.map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v9",
          center: [30.31647222, 59.95022267],
          zoom: 13
        });

        document.title = 'Карта | Loft Taxi';
      }

      componentDidUpdate() {
        const { orderCoords } = this.props;
        const mapHasLayer = this.map.getLayer('route');
    
        if (mapHasLayer) {
          this.map.removeLayer('route');
          this.map.removeSource('route');
        }
    
        if (orderCoords) {
          this.map.addLayer(getRouteOpts(orderCoords));
          this.map.fitBounds(
            [orderCoords[0], orderCoords[orderCoords.length - 1]],
            { padding: 100 }
          );
        }
      }
    
      componentWillUnmount() {
        this.map.remove();
      }

    render() {
        return <div className="container" ref={this.mapContainer} />
    }
}

export default MapPage