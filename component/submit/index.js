import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native";

class SubmitButtonComponent extends React.Component{
    render(){
        return(
          <TouchableOpacity 
          style={[styles.submitButtonHolder, {opacity: this.props.loading? 0.5 : 1}]} 
          onPress={this.props.navigate}
          disabled={this.props.loading}>
            {this.props.loading?
             (<ActivityIndicator size="large" color="rgb(0, 150, 0)" />
             ):(
             <Text style={{fontWeight:"bold"}}>{this.props.submitButtonText}</Text>
             )}
          </TouchableOpacity>  
        );
    }
}

const styles = StyleSheet.create({
    submitButtonHolder: {
        justifyContent: "center", 
        alignItems: "center",
        fontWeight:"bold",
        backgroundColor: "rgb(0, 255, 0)",
        paddingVertical:20,
        marginVertical:20,
        borderRadius:10,
        shadowColor: "rgba(0,0,0,0.3)",
        shadowRadius: 10,
        shadowOpacity:1,
        shadowOffset: { 
        width: 10, 
        height:10
        },
    }
})

export default SubmitButtonComponent;