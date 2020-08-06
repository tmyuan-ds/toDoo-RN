import React, {Component} from 'react';
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Details extends React.Component{

    constructor(props){
        super(props);
        let data = this.props.route.params.detailsData;
        console.log("Movie Data is: ", data);
        this.state ={
            movie:data,
        }
    }

    render() {
        return(
        <View style={{flex:1, backgroundColor: "rgb(59, 58, 58)"}}>

            <View style={styles.movieDetails}>
                <Text style={styles.detailsTitle}>Movie Name: </Text>
                <Text>{this.state.movie.name}</Text>
                <Text style={styles.detailsTitle}>Movie Date: </Text>
                <Text>{this.state.movie.date}</Text>
                <Text style={styles.detailsTitle}>Movie Desc: </Text>
                <Text>{this.state.movie.desc}</Text>
                <Text style={styles.detailsTitle}>Movie Genre: </Text>
                <Text>{this.state.movie.type}</Text>
            </View>

        </View>
        );
    }
}

const styles = {
    movieDetails:{
        margin: 15,
        padding: 20,
        height: "90%",
        width: "90%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alighItems: "flex-end",
        backgroundColor:"white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
    },

    
    detailsTitle:{
        
        fontWeight:"bold",
        fontSize: 25,
    },
}

export default Details;