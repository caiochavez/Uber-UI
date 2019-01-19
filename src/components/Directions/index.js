import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ origin, destination, onReady }) => (
  <MapViewDirections
  origin={origin} 
  destination={destination}
  onReady={onReady}
  apiKey='AIzaSyARjR2OGgg9m4YH2LzfN-iaGaKgy1394JA'
  strokeWidth={3}
  strokeColor='#222' />
)

export default Directions