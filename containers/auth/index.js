import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar} from "react-native";

import Header from "component/header";
import TextInputComponent from "component/textInput";
import SubmitButtonComponent from 'component/submit';

const images = {
  setting_icon: require("assets/images/icon2.png"),
  setting_icon_two :"https://img.icons8.com/all/500/microsoft-to-do-app.png"
}

class Auth extends React.Component{

    constructor(props){
        super(props);
          this.state = {
            showLoginForm: true,
          }
      }
    

    render() {
        return(
            <View style={{flex: 1,backgroundColor:"black"}}>
            {/* <View style={this.state.showLoginForm? styles.loginPage: styles.registerPage}> */}
                < Header/>
                <View style={styles.logoHolder}>
                    <View style={styles.logo}>
                      <Image 
                      source = {images.setting_icon} 
                      style={{
                          width:50, 
                          height:50,
                          // resizeMode:"contain",
                          resizeMode:"cover",
                          marginLeft: "25%",
                          marginTop: "25%",
                      }}
                    />
                    </View>
                    <View style={styles.buttonHolder}>

                        <TouchableOpacity 
                        onPress={()=> this.setState({ showLoginForm: true})}
                        style={this.state.showLoginForm? styles.textBorderTouched: styles.textBorderRest}>
                        {/* onPress={()=> this.setState({ showLoginForm: true})}> */}
                        <Text style={styles.direct}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=> this.setState({ showLoginForm: false})}
                        style={!this.state.showLoginForm? styles.textBorderTouched: styles.textBorderRest}>
                        {/* onPress={()=> this.setState({ showLoginForm: false})}> */}
                            <Text style={styles.direct} >Register</Text>
                        </TouchableOpacity>  
                        
                    </View>
                 </View>


                {this.state.showLoginForm ?(
                <View style={{paddingHorizontal: 20}}>
                    <TextInputComponent
                        inputTitle="Username"
                        inputPlaceHolder="Your username"
                        inputType="default"
                    />
                    <TextInputComponent
                        inputTitle="Password"
                        inputPlaceHolder="Your Password"
                        inputType="default"
                        inputSecure={true}
                    />

                    <SubmitButtonComponent
                        buttonTitle="Login"
                        submitButtonText="Login"
                        // navigate={()=>console.log("Hi")}
                        navigate={()=>this.props.navigation.navigate("BottomTab")}
                    />
                </View>
                ) : (
                <View style={{paddingHorizontal: 20}}>
                    <TextInputComponent
                    inputTitle="Username"
                    inputPlaceHolder="Your username"
                    inputType="default"
                    />
                    <TextInputComponent
                    inputTitle="Password"
                    inputPlaceHolder="Your Password"
                    inputType="default"
                    inputSecure={true}
                    />

                    <TextInputComponent
                    inputTitle="Confirm Password"
                    inputPlaceHolder="Your Confirm Password"
                    inputType="default"
                    inputSecure={true}
                    />
                    {/* <TextInputComponent
                    inputTitle="Phone"
                    inputPlaceHolder="Your number"
                    inputType="phone-pad"
                    /> */}

                    <SubmitButtonComponent
                    buttonTitle="Register"
                    submitButtonText="Register"
                    // navigate={()=>console.log("Hi")}
                    navigate={()=>this.props.navigation.navigate("BottomTab")}
                    />
                </View>
                )}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight:"bold",
      color: "white",
      textShadowColor: "rgba(0,0,0,0.5)",
      textShadowRadius: 5,
      textShadowOffset: { width: 10, height:10},
    },
  
    boxy:{
      width: 150,
      height:100,
      backgroundColor:"blue",
      shadowColor: "white",
      shadowRadius: 10,
      shadowOpacity:1,
      shadowOffset: { 
        width: 10, 
        height:10
      },
      
      elevation: 5,
      // padding: 10,
      paddingHorizontal: 30,
      paddingVertical: 15,
    },
  
    boxHolder:{
      width: "100%",
      // backgroundColor: "blue",
      flexDirection:"row",
      justifyContent: "space-around",
    },
    
    logoHolder:{
      marginVertical: 20,
      alignItems:"center",
      // backgroundColor:"green",
    }, 
  
    logo:{
      width: 100,
      height:100,
      // backgroundColor: "darkgreen",
      borderColor:"grey",
      borderWidth:1,
      borderRadius: 50,
    }, 
  
    buttonHolder:{
      height: 50,
      flexDirection: "row",
      marginTop:20,
      width: "100%",
      paddingHorizontal: 20,
      justifyContent: "space-evenly",
      alignItems:"center",
      // backgroundColor:"yellow",
    },
  
    buttonText:{
      marginHorizontal: 20,
    },
  
    textBorderTouched:{
      borderBottomColor:"rgb(0, 255, 0)",
      borderBottomWidth: 3,
      borderBottomRightRadius:5,
      borderBottomLeftRadius:5,
    },
  
    textBorderRest:{
      // borderBottomColor:"lightgreen",
      // borderBottomWidth: 5,
      borderBottomRightRadius:5,
      borderBottomLeftRadius:5,
    },
  
    loginPage:{
      backgroundColor: "rgb(228, 249, 245)", 
      flex:1, 
    },
  
    registerPage:{
      backgroundColor: "rgb(228, 249, 245)", 
      flex:1, 
    },

    direct: {
      color:"lightgrey", 
      fontWeight:"bold",
      fontSize: 18,
    },
  
  })

export default Auth;