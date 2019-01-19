import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import Search from '../Search'

class Map extends Component {

  state = { region: null }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition (
      ({ coords: { latitude, longitude } }) => {
        this.setState( (state, props) => {
          return { region: { latitude, longitude, latitudeDelta: 0.0143, longitudeDelta: 0.0134 } }
        })
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    )
  }

  render () {
    const { region } = this.state
    return (
      <View style={{ flex: 1 }}>
        <MapView 
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled />
        <Search />
      </View> 
    )
  }

}

export default Map