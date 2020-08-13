import React from "react";
import { View, TouchableOpacity,Text, Image, FlatList, Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import SubmitButtonComponenet from "component/submit"

const images = {
    setting_icon: require("assets/images/icon2.png"),
    setting_icon_two :"https://img.icons8.com/all/500/microsoft-to-do-app.png"
}

import {connect} from "react-redux";
import Actions from "actions";


class Profile extends React.Component{

    logoutPressed(){
        this.props.onResetUserSession();
        Alert.alert("Bye Bye!", "Logout successful",[
            {
                text: "Okay",
                onPress: () => this.props.navigation.navigate("Auth"),
            },
        ]);
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor: "grey"}}>

                 <View style={styles.profileDetails}>
                    <Image 
                    //Three Way to import image into our project
                    //1 
                    source = {images.setting_icon} 
                    //2 source = {require("assets/images/setting_icon.png")} 
                    //3 source = {{
                    //     uri:
                    //     "https://img.icons8.com/all/500/microsoft-to-do-app.png"
                    // }} 
                    style={{
                        width:50, 
                        height:50,
                        // resizeMode:"contain",
                        resizeMode:"cover"
                    }}
                    />
                    <Text style={styles.profileDetailsTitle}> Username:  </Text>
                    <Text> tmyuan  </Text>
                    <Text  style={styles.profileDetailsTitle}> Profile Name: </Text>
                    <Text> Ming Yuan </Text>
                    <Text  style={styles.profileDetailsTitle}> Phone Number: </Text>
                    <Text> 012 - 3456 589</Text>
                    <Text  style={styles.profileDetailsTitle}> Email Address: </Text> 
                    <Text> tingmingyuan@invokeisdata.com </Text> 

                </View>
                
                <View style={styles.logoutSec}>

                <TouchableOpacity style={styles.submitButtonHolder}
                onPress={()=>this.logoutPressed()}>
                    <Text>Log Out</Text>
                </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = {
    profileDetails:{
        margin: 15,
        padding: 20,
        width:"90%",
        height: "75%",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems: "center"
    },

    logoutSec:{
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },

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
    },
    

    profileDetailsTitle: {
        fontWeight: "bold",
        fontSize: 15,
    }

}

const mapStateToProps = (store) => ({});

const mapDispatchToProps = {
    onResetUserSession: Actions.resetUserSession
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);