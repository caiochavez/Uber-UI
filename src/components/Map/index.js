import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import Search from '../Search'
import Directions from '../Directions'

class Map extends Component {

  state = { region: null }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition (
      ({ coords: { latitude, longitude } }) => {
        this.setState( (state, props) => ({
          region: { latitude, longitude, latitudeDelta: 0.0143, longitudeDelta: 0.0134 }
        }))
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    )
  }

  handleLocaltionSelected = (data, { geometry }) => {
    const { location: { lat: latitude, lng: longitude } } = geometry
    console.log('Locatiooooooon: ', latitude)
    this.setState( (state, props) => ({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      } 
    }))
  }

  render () {
    const { region, destination } = this.state
    return (
      <View style={{ flex: 1 }}>
        <MapView 
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled >
           {
              destination && (
                <Directions origin={region} destination={destination} onReady={() => {}} />
              ) 
            }
        </MapView>
        <Search onLocationSelected={this.handleLocaltionSelected} />
      </View> 
    )
  }

}

export default Map