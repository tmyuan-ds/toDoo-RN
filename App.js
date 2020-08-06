import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Navigator from "./navigator";


class App extends React.Component{



  
  render() {
    return (
      <View style={{flex:1}}>
        <Navigator/>
      </View>
    )
  }
}



export default App;