// style={{
//     backgroundColor: "crimson", 
//     flex:1, 
//     justifyContent: "center", 
//     alignItems: "center"}}>

import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


class TextInputComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            viewPass: true,
        };
    }
    render(){
        return (
            <View>
                <Text style={styles.title}>{this.props.inputTitle}</Text>
                <TextInput 
                placeholder={this.props.inputPlaceHolder} 
                style={styles.formInput} 
                keyboardType={this.props.inputType || "default"}
                secureTextEntry={this.props.inputSecure && this.state.viewPass} 
                // onChange={this.props.onChange}
                onChangeText={this.props.abc}
                />

                {this.props.showHide && (
                    <TouchableOpacity
                     onPress={()=> this.setState({viewPass: !this.state.viewPass})}
                     >
                         <Text style={{color:"white"}}>{this.state.viewPass ? "show": "hide" }</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    title:{
        fontSize: 15,
        color: "white",
        fontWeight: "bold"
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