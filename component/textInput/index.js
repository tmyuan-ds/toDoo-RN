// style={{
//     backgroundColor: "crimson", 
//     flex:1, 
//     justifyContent: "center", 
//     alignItems: "center"}}>

import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";


class TextInputComponent extends React.Component{
    render(){
        return (
            <View>
                <Text style={styles.title}>{this.props.inputTitle}</Text>
                <TextInput 
                placeholder={this.props.inputPlaceHolder} 
                style={styles.formInput} 
                keyboardType={this.props.inputType || "default"}
                secureTextEntry={this.props.inputSecure || false} 
                // onChange={this.props.onChange}
                onChangeText={this.props.abc}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    title:{
        fontSize: 15,
        color: "white",
    },

    formInput:{
        backgroundColor: "white",
        borderRadius:3,
        borderColor:"black",
        borderWidth:1,
        height:35,
        paddingHorizontal:10,
        marginVertical:10,
    }

})

export default TextInputComponent;