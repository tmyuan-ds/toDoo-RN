import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Header extends React.Component{
    render(){
        return (
            <View style={styles.headContainer}>
                <Text style={{color: "white", fontWeight: "bold", fontSize:17}}>ToDoo</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    headContainer:{
        height: 80,
        width: "100%",
        backgroundColor:"rgb(58, 58, 58)",
        justifyContent: "center",
        alignItems: "center",
    },
}
)

export default Header;