import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableOpacity, BorderlessButton } from "react-native-gesture-handler";
import SubmitButtonComponenet from "component/submit"

const images = {
    setting_icon: require("assets/images/icon2.png"),
    setting_icon_two :"https://img.icons8.com/all/500/microsoft-to-do-app.png"
}


class Profile extends React.Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor: "black"}}>

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

                    <SubmitButtonComponenet
                        buttonTitle="Logout"
                        submitButtonText="Logout"
                        navigate={()=>this.props.navigation.navigate("Auth")}
                    />

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

    profileDetailsTitle: {
        fontWeight: "bold",
        fontSize: 15,
    }

}

export default Profile;