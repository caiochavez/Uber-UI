import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ origin, destination, onReady }) => (
  <MapViewDirections
  origin={origin} 
  destination={destination}
  onReady={onReady}
  apikey='AIzaSyARjR2OGgg9m4YH2LzfN-iaGaKgy1394JA'
  strokeWidth={3}
  strokeColor='hotpink' />
)

export default Directions