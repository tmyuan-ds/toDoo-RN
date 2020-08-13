import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Alert, ScrollView} from "react-native";

import Header from "component/header";
import TextInputComponent from "component/textInput";
import SubmitButtonComponent from 'component/submit';

import {connect} from 'react-redux';
import Actions from "actions";

import {Transition, Transitioning} from "react-native-reanimated";

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
          this.ref = React.createRef();
      }

    componentDidMount(){
      this.ref.current.animateNextTransition;
      console.log("DID MOUNT ", this.props.getUserSession);
      const {getUserSession} = this.props;
      if (Object.keys(getUserSession.data).length !== 0) {
        this.props.navigation.navigate("BottomTab");
      }
    }
    componentDidUpdate(prevProps){
      const {getLoginData, getRegisterData} = this.props;
      console.log("login componenetDidUpdate", getLoginData);
            //true                                //false
      if (prevProps.getLoginData.isLoading && !getLoginData.isLoading) {
        console.log("prevProps", prevProps.getLoginData.isLoading);
        console.log("latest props", getLoginData.isLoading);
        this.setState({loading: false});

        if(Object.keys(getLoginData.data).length !== 0 &&
          getLoginData.data !== null) {
          console.log("TOKEN is ", getLoginData.data);
          Alert.alert("Success", "Login successful", [
            {
              text:'To Dash',
              onPress:() => this.props.navigation.navigate("BottomTab"),
            },
          ]
          );

      } else if(getLoginData.error !== null) { 
        Alert.alert("Failed", "Login Failed")
        }
      }

      if (prevProps.getRegisterData.isLoading && !getRegisterData.isLoading) {
        console.log("prevProps", prevProps.getRegisterData.isLoading);
        console.log("latest props", getRegisterData.isLoading);
        this.setState({loading: false});

        if(Object.keys(getRegisterData.data).length !== 0 &&
          getLoginData.data !== null) {
          Alert.alert("Success", "Your Account is created", [
            {
              text:'To Login',
              onPress:this.setState({ showLoginForm: true}),
            },
          ]
          );

      } else if(getRegisterData.error !== null) { 
        Alert.alert("Failed", "Please In All the necessary field")
        }
      }
    }

    buttonPressed(){
      const data = {
        email:this.state.email,
        password:this.state.password,
      };
      this.setState({loading:true});
      this.props.onLogin(data);
    }

    registerButtonPressed(){
      const data = {
        username:this.state.username,
        email:this.state.email,
        password:this.state.password, 
      };
      this.setState({loading:true});
      this.props.onRegister(data);
    }
    
    headerTransition = (
      <Transition.Together>
          <Transition.In 
          type="slide-right" 
          durationMs={2000}
          interpolation="easeIn"
          />
      </Transition.Together>
    )
    render() {
        return(
            <ScrollView style={{flex: 1,backgroundColor:"grey"}}>
            {/* <View style={this.state.showLoginForm? styles.loginPage: styles.registerPage}> */}
                < Header/>
                <Transitioning.View 
                style={styles.logoHolder} 
                ref={this.ref} //same as function of id in html
                transition={this.headerTransition}
                >
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
                        ref={this.ref}
                        onPress={()=> this.setState({ showLoginForm: true})}
                        style={this.state.showLoginForm? styles.textBorderTouched: styles.textBorderRest}>
                        {/* onPress={()=> this.setState({ showLoginForm: true})}> */}
                        <Text style={styles.direct}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        ref={this.ref}
                        onPress={()=> this.setState({ showLoginForm: false})}
                        style={!this.state.showLoginForm? styles.textBorderTouched: styles.textBorderRest}>
                        {/* onPress={()=> this.setState({ showLoginForm: false})}> */}
                            <Text style={styles.direct} >Register</Text>
                        </TouchableOpacity>  
                        
                    </View>
                 </Transitioning.View>


                {this.state.showLoginForm ?(
                <View style={{paddingHorizontal: 20}}>
                    <TextInputComponent
                        inputTitle="Email"
                        inputPlaceHolder="Your email"
                        inputType="default"
                        abc={(email)=>this.setState({email})}
                    />
                    <TextInputComponent
                        inputTitle="Password"
                        inputPlaceHolder="Your Password"
                        inputType="default"
                        inputSecure={true}
                        abc={(password)=>this.setState({password})}
                        showHide="true"
                    />

                    <SubmitButtonComponent
                        loading={this.state.loading}
                        buttonTitle="Login"
                        submitButtonText="Login"
                        // navigate={()=>this.navigation.navigate("BottomTab")}
                        navigate = {()=> this.buttonPressed()}
                    />
                </View>
                ) : (
                <View style={{paddingHorizontal: 20}}>
                    <TextInputComponent
                    inputTitle="Username"
                    inputPlaceHolder="Your username"
                    inputType="default"
                    abc={(username)=>this.setState({username})}
                    />
                    <TextInputComponent
                    inputTitle="Email"
                    inputPlaceHolder="Your Email"
                    inputType="default"
                    abc={(email)=>this.setState({email})}
                    />

                    <TextInputComponent
                    inputTitle="Password"
                    inputPlaceHolder="Your Password"
                    inputType="default"
                    inputSecure={true}
                    showHide={true}
                    abc={(password)=>this.setState({password})}
                    />
                    {/* <TextInputComponent
                    inputTitle="Phone"
                    inputPlaceHolder="Your number"
                    inputType="phone-pad"
                    /> */}

                    <SubmitButtonComponent
                    loading={this.state.loading}
                    buttonTitle="Register"
                    submitButtonText="Register"
                    // navigate={()=>console.log("Hi")}
                    // navigate={()=>this.props.navigation.navigate("BottomTab")}
                    navigate = {()=> this.registerButtonPressed()}
                    />
                </View>
                )}
            </ScrollView>
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


  const mapStateToProps = (store)=>({
    getUserSession: Actions.getUserSession(store),
    getLoginData: Actions.getLoginData(store),
    getRegisterData: Actions.getRegisterData(store)
  });
  const mapDispatchToProps = {
    onLogin:Actions.login,
    onRegister: Actions.register
  };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);