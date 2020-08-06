import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView,TouchableOpacity } from "react-native";
import {  BorderlessButton } from "react-native-gesture-handler";

const movieData = [
    {
    name:"joker",
    desc: "this is a joker movie",
    date: "20 March 2020",
    type: "Personal",
},
    {
    name:"batman",
    desc: "this is a batman movie",
    date: "7 May 2020",
    type: "Investing",
},
    {
    name:"pokemon",
    desc: "this is a pokemon movie",
    date: "8 November 2020",
    type: "Personal",
},
    {
    name:"joker",
    desc: "this is a joker movie",
    date: "20 March 2020",
    type: "Study",
},
    {
    name:"batman",
    desc: "this is a batman movie",
    date: "7 May 2020",
    type: "Personal",
},
    {
    name:"pokemon",
    desc: "this is a pokemon movie",
    date: "8 November 2020",
    type: "Work"
},
    {
    name:"joker",
    desc: "this is a joker movie",
    date: "20 March 2020",
    type: "Investing"
},
    {
    name:"Oxford",
    desc: "this is a batman movie",
    date: "7 May 2020",
    type: "Study"
},
    {
    name:"Oliver",
    desc: "this is a pokemon movie",
    date: "8 November 2020",
    type: "Cook"
},
    {
    name:"Jamie",
    desc: "this is a joker movie",
    date: "20 March 2020",
    type: "Cook"
},
    {
    name:"batman",
    desc: "this is a batman movie",
    date: "7 May 2020",
    type: "Study"
},
    {
    name:"pokemon",
    desc: "this is a pokemon movie",
    date: "8 November 2020",
    type: "Investing"
},
    {
    name:"joker",
    desc: "this is a joker movie",
    date: "20 March 2020",
    type: "Personal",
},
    {
    name:"batman",
    desc: "this is a batman movie",
    date: "7 May 2020",
    type: "Personal",
},
    {
    name:"pokemon",
    desc: "this is a pokemon movie",
    date: "8 November 2020",
    type: "Work",
},

];

const dateData=["Personal", "Work", "Study", "Cook", "Investing"]


class Dashboard extends React.Component{

    constructor(){
        super();
        this.state ={
            selected: "Personal",
        };
    }
 _renderCardList(item){
        return (
        <TouchableOpacity onPress= {()=> this.props.navigation.navigate("Details", {detailsData: item})}>
        {/* // <TouchableOpacity onPress= this.props.navigation.navigate> */}

            <View style={styles.card}>
                    <View style={styles.status}></View>
                    <View style={styles.cardLeft}>
                        <View style={styles.cardUpper}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <Text style={styles.desc}>{item.desc}</Text>
                    </View>
            </View>


        </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor: "black"}}>
                
                {/* "rgb(228, 249, 245)" */}
               <View style={styles.headerRoll}>
                   <ScrollView 
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                        flexDirection:"row"}}>
                            {dateData.map( list => (
                            <TouchableOpacity style={[styles.headerButton, 
                                {backgroundColor: this.state.selected ===list ?"rgb(0, 255, 0)":"darkgreen"}]}
                            onPress = {() => this.setState({selected: list})}
                            >
                                <Text >{list}</Text>
                            </TouchableOpacity>))}
                   </ScrollView>

               </View>

                {/* All button, light up when first come in, show all tasks */}
                
                {/* { this.state.selected===""? (
                    <FlatList 
                            data={movieData}
                            renderItem = {({item}) =>
                            this._renderCardList(item)
                        }
                            numColumns={1}
                            // contentContainerStyle={{alignItems: "center"}}
                    />) : (
                    <FlatList 
                            data={movieData.filter((list) =>list.type === this.state.selected)}
                            renderItem = {({item}) =>
                            this._renderCardList(item)
                        }
                            numColumns={1}
                            // contentContainerStyle={{alignItems: "center"}}
                    /> 
                    )
                } */}

                <FlatList 
                    data={movieData.filter((list) =>list.type === this.state.selected)}
                    renderItem = {({item}) =>
                    this._renderCardList(item)
                }
                    numColumns={1}
                    // contentContainerStyle={{alignItems: "center"}}
                /> 

                <TouchableOpacity
                style={styles.addButton}
                onPress={()=>this.props.navigation.navigate("AddToDo")}
                >
                    <Text>+</Text>
                </TouchableOpacity>


                
            </View>
        );
    }
}

const styles = {
    card: { 
        width: "90%",
        height: 80,
        // justifyContent: "center",
        backgroundColor: "white",
        // margin: 10,
        marginVertical:5,
        marginHorizontal: 20,
        padding:15,
        borderRadius: 5,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowRadius: 3,
        shadowOpacity:1,
        shadowOffset: { 
          width: 3, 
          height:3
        },
        flexDirection:"row",
    },
    
    status:{
        width: 15,
        height:15,
        backgroundColor: "rgb(255, 63, 0)",
        borderRadius: 50, 
        marginTop:18,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowRadius: 6,
        shadowOpacity:1,
        shadowOffset: { 
          width: 3, 
          height:3
        },
    },

    cardUpper: { 
        width:"80%",
        flexDirection: "row",
        justifyContent:'space-between',
    },

    name: { 
        fontWeight: "Bold",
        fontSize: 20,
        marginBottom: 5,
        marginLeft:20,
    }, 
    desc: { 
        fontSize: 15,
        marginTop: 5,
        color: "rgba(0,0,0,0.5)",
        marginLeft:20,
    }, 
    
    date: { 
        fontSize: 12,
        color: "rgba(0,0,0,0.5)"
    },

    headerRoll:{
        height: 80,
        width: "100%",
        // backgroundColor: "yellow",
    },

    headerButton:{
        minWidth: 80,
        height: 50,
        borderRadius:8,
        backgroundColor: "orange",
        justifyContent:"center",
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 10,
    },

    addButton:{
        width: 80,
        height: 80,
        backgroundColor: "blue",
        borderRadius: 40,
        justifyContent:"center",
        alignItems:"center",
        position: "absolute",
        bottom: 10,
        right: 15,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowRadius: 6,
        shadowOpacity:1,
        shadowOffset: { 
          width: 3, 
          height:3
        },
    }

}

export default Dashboard;