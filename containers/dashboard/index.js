import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Modal, TouchableHighlight, Alert, ScrollView,TouchableOpacity, TouchableWithoutFeedback, RefreshControl} from "react-native";
import {  BorderlessButton } from "react-native-gesture-handler";

import moment, { relativeTimeThreshold } from 'moment';
import {connect} from "react-redux";
import Actions from "actions";
import { SwipeListView } from 'react-native-swipe-list-view';
import TextInputComponent from "../../component/textInput";


// const movieData = [
//     {
//     name:"joker",
//     desc: "this is a joker movie",
//     date: "20 March 2020",
//     type: "Personal",
// },
//     {
//     name:"batman",
//     desc: "this is a batman movie",
//     date: "7 May 2020",
//     type: "Investing",
// },
//     {
//     name:"pokemon",
//     desc: "this is a pokemon movie",
//     date: "8 Nov 2020",
//     type: "Personal",
// },
//     {
//     name:"joker",
//     desc: "this is a joker movie",
//     date: "20 March 2020",
//     type: "Study",
// },
//     {
//     name:"batman",
//     desc: "this is a batman movie",
//     date: "7 May 2020",
//     type: "Personal",
// },
//     {
//     name:"pokemon",
//     desc: "this is a pokemon movie",
//     date: "8 Nov 2020",
//     type: "Work"
// },
//     {
//     name:"joker",
//     desc: "this is a joker movie",
//     date: "20 March 2020",
//     type: "Investing"
// },
//     {
//     name:"Oxford",
//     desc: "this is a batman movie",
//     date: "7 May 2020",
//     type: "Study"
// },
//     {
//     name:"Oliver",
//     desc: "this is a pokemon movie",
//     date: "8 Nov 2020",
//     type: "Cook"
// },
//     {
//     name:"Jamie",
//     desc: "this is a joker movie",
//     date: "20 March 2020",
//     type: "Cook"
// },
//     {
//     name:"batman",
//     desc: "this is a batman movie",
//     date: "7 May 2020",
//     type: "Study"
// },
//     {
//     name:"pokemon",
//     desc: "this is a pokemon movie",
//     date: "8 Nov 2020",
//     type: "Investing"
// },
//     {
//     name:"joker",
//     desc: "this is a joker movie",
//     date: "20 March 2020",
//     type: "Personal",
// },
//     {
//     name:"batman",
//     desc: "this is a batman movie",
//     date: "7 May 2020",
//     type: "Personal",
// },
//     {
//     name:"pokemon",
//     desc: "this is a pokemon movie",
//     date: "8 Nov 2020",
//     type: "Work",
// },

// ];

const dateData=["Completed", "Pending"]


class Dashboard extends React.Component{

    constructor(){
        super();
        this.state ={
            selected: "Completed",
            taskList: [],
            refreshing: false,
            modalVisible: false,
            abc: 0,
        };
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    componentDidMount(){
        this.props.onGetAll();
    }

    componentDidUpdate(prevProps){

        const {getGetAllData, getDeleteTaskData, getUpdateStatus} = this.props;

        if(prevProps.getGetAllData.isLoading && !getGetAllData.isLoading){
            this.setState({ refreshing: false})
           console.log("dash updagte", getGetAllData.data[0])
            if(getGetAllData.data.status === "success"){
                this.setState({taskList:getGetAllData.data[0]});
                console.log("Dashboard didupdate", getGetAllData.data[0]);
                // console.log({taskList});
            }
        }

        if(prevProps.getDeleteTaskData.isLoading && !getDeleteTaskData.isLoading){
        //     this.setState({ refreshing: false})
        //    console.log("dash updagte", getDeleteTaskData.data[0])
            if(getDeleteTaskData.data.status === "success"){
                Alert.alert("Success", "Your Task has been deleted", [
                    {
                      text:'To Dash',
                      onPress:() => this.props.navigation.navigate("BottomTab"),
                    },
                  ]
                );
            }
        }

        if(prevProps.getUpdateStatus.isLoading && !getUpdateStatus.isLoading){
                if(getUpdateStatus.data.status === "success"){
                    Alert.alert("Success", "Your just completed this task", [
                        {
                          text:'To Dash',
                          onPress:() => this.props.navigation.navigate("BottomTab"),
                        },
                      ]
                    );
                }
            }

    }

    convertTextToBoolean(selected){
        if(this.state.selected == "All"){
            this.setState({abc: 1});
        } 
        if(this.state.selected == "Pending"){
            this.setState({abc: 1});
        }
        if(this.state.selected == "Completed"){
            this.setState({abc: 0});
        }
    }

    
    
    
    _renderCardList(item){
        console.log("item ss",item);
           
        return (
                <TouchableWithoutFeedback onPress= {()=> this.props.navigation.navigate("Details", {detailsData: item})}>
                {/* <TouchableOpacity onPress= {()=> this.props.navigation.navigate("Details", {detailsData: item})}>  */}

                    <View style={styles.card}>
                            <View style={[styles.status, {backgroundColor: item.status?"pink":"rgb(0, 150, 0)"}]}></View>
                            <View style={styles.cardLeft}>
                                <View style={styles.cardUpper}>
                                    <Text style={styles.name}>{item.task_title}</Text>
                                    <Text style={styles.date}>{moment(item.created_at).format("DD-MM-YYYY")}</Text>
                                </View>
                                <Text style={styles.desc}>{item.task_details}</Text>
                            </View>
                    </View>


                {/* </TouchableOpacity> */}
                </TouchableWithoutFeedback>
            )
    }

    onRefresh(){
        console.log("Hi i am here");
        this.setState({ refreshing: true});
        this.props.onGetAll();
        // setTimeout(()=>
        // fctn here)
    }

    onDeleteTaskPressed(id){
        console.log(this.state.taskList.id);
        this.props.onDeleteTask(id);
    }

    onStatusButtonPressed(id) {
        this.props.onUpdateStatus(id);
    }

    render(){

        const{ modalVisible } = this.state;
        const abc = this.state.abc;
        return(
            <View style={{flex:1, backgroundColor: "grey"}}>

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
                                {backgroundColor: this.state.selected ===list ?"rgb(0, 255, 0)":"rgb(0, 150, 0)"}]}
                            onPress = {() => this.setState({selected: list, abc:0})}
                            >
                                <Text >{list}</Text>
                            </TouchableOpacity>))}
                   </ScrollView>

               </View>

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate("TransitionBox")}>
                    <Text>Click to me to see some animation</Text>
                </TouchableOpacity>
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

                {/* <FlatList 
                    data={movieData.filter((list) =>list.type === this.state.selected)}
                    renderItem = {({item}) =>
                    this._renderCardList(item)
                }
                    numColumns={1}
                    // contentContainerStyle={{alignItems: "center"}}
                />  */}

                    {/* <FlatList 
                        data={this.state.taskList.filter(
                            (list)=> list.status==0)}
                        renderItem = {({item}) =>
                        this._renderCardList(item)}
                    
                    numColumns={1}
                    refreshControl={
                        <RefreshControl 
                        tintColor="yellow"
                        refreshing={this.state.refreshing} 
                        onRefresh={()=>this.onRefresh()}
                        />}
                        // contentContainerStyle={{alignItems: "center"}}
                    />  */}
                    <SwipeListView
                        data={this.state.taskList.filter(
                            // (list)=> list.status==`${abc}`)}
                            (list)=> list.status== `${abc}`)}
                        renderItem = {({item}) =>
                        this._renderCardList(item)}
                        renderHiddenItem={ ({item}) => (
                            <View style={styles.rowBack}>
                                <TouchableOpacity
                                style={styles.backLeftBtn}
                                onPress= {()=> this.onDeleteTaskPressed(item.id)}>
                                <Text style={{fontWeight:"bold"}}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                                >
                                <Text style={{fontWeight:"bold", paddingRight: 5}}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={[styles.backRightBtn, styles.backRightBtnRight]} 
                                onPress= {()=> this.onStatusButtonPressed(item.id)}>
                                <Text style={{fontWeight:"bold"}}>MAC</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        leftOpenValue={75}
                        stopLeftSwipe={80}
                        rightOpenValue={-150}
                        stopRightSwipe={-80}

                        numColumns={1}

                        refreshControl={
                        <RefreshControl 
                        tintColor="yellow"
                        refreshing={this.state.refreshing} 
                        onRefresh={()=>this.onRefresh()}
                        />}
                        // contentContainerStyle={{alignItems: "center"}}
                    /> 

                <TouchableOpacity
                style={styles.addButton}
                onPress={()=>this.props.navigation.navigate("AddToDo")}
                // onPress={()=>{this.setModalVisible(true)}}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>

                            </TouchableHighlight>

                            {/* <TextInputComponent 
                    inputTitle="Title"
                    inputPlaceHolder="Title"
                    inputType="default"
                    // onChange={(title)=>console.log(title)}
                    // onChange={(title)=> this.setState({taskTitle:title})}
                    abc={(title)=> this.setState({taskTitle:title}, 
                        ()=>console.log(this.state.taskTitle))}
                    />
                 
                    <TextInputComponent 
                    inputTitle="Details"
                    inputPlaceHolder="Details"
                    inputType="default"
                    abc={(details)=>this.setState({taskDetails:details})}
                    /> */}

                    <Text>Task Title</Text>
                    <Text>{this.state.taskList.task_title}</Text>
                    <Text>Task Details</Text>
                    <Text>{this.state.taskList.task_details}</Text>
                        </View>
                    </View>
                </Modal>

                
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

    rowBack:{
        width: "90%",
        height: 80,
        marginVertical:5,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        position: "absolute",
        zIndex:-1,
    },

    backLeftBtn: {
        alignItems: 'flex-start',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 85,
        paddingLeft: 20,
        backgroundColor: "crimson",
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
      },


    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 20,
      },

      backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
      },

      backRightBtnRight: {
        backgroundColor: 'rgb(0,150,0)',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
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
        width: 40,
        height: 40,
        backgroundColor: "rgb(191, 255, 0)",
        borderRadius: 20,
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
    },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

}

const mapStateToProps = (store) => ({
    getGetAllData: Actions.getGetAllData(store),
    getDeleteTaskData: Actions.getDeleteTaskData(store),
    getUpdateStatus: Actions.getUpdateStatus(store),
});

const mapDispatchToProps = {
    onGetAll: Actions.getAll,
    onDeleteTask: Actions.deleteTask,
    onUpdateStatus: Actions.updateStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);