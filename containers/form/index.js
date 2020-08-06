import React from "react";
import { View, Text,  Alert, Button,TouchableOpacity , Image, ScrollView} from "react-native";
import TextInputComponent from "../../component/textInput";
import SubmitButtonComponenet from "component/submit"
import {CONTAINER} from "common/styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { ThemeProvider } from "@react-navigation/native";


class AddToDo extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            taskTitle:"",
            taskDetails:"",
            taskStatus:"",
            date: new Date(),
            mode: 'date',
            show:false,
            show2:false,
            selectedStartDate: null,
            selectedEndDate: null,
            image: null,
            selectedImage:'',
            selectedImage2:'',
            status:''
        }
    }



    addButtonPressed(){
        const {taskTitle, taskDetails, taskStatus} = this.state;

        if(taskTitle !=='' && taskDetails !=='' && taskStatus !=='' ){
            Alert.alert("Success", "Now task added!", 
            [{text:"Hi there",
            onPress:()=>this.props.navigation.navigate("Dashboard")}]);
        }
        else{
            Alert.alert("Unable to Add Task", "Please fill in all the necessary fields.");
        }
    }

    async pickImagePressed(){
        try{
            let result =await ImagePicker.launchImageLibraryAsync(
                {
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                }
            );

            if(!result.cancelled){
                this.setState({selectedImage: result.uri})
            }
            console.log(result);
            }
        catch(error){
            console.log(error)
        }
    }

    async pickImagePressed2(){
        try{
            let result =await ImagePicker.launchImageLibraryAsync(
                {
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                }
            );

            if(!result.cancelled){
                this.setState({selectedImage2: result.uri})
            }
            console.log(result);
            }
        catch(error){
            console.log(error)
        }
    }
    
    render(){
        // console.log(this.state.taskTitle);
        // const d = JSON.stringify(this.state.selectedEndDate)


        return(
            <ScrollView style={CONTAINER}>

                    <TextInputComponent 
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
                    />

                    <Text style={styles.formDetailsTitle}>Status</Text>
                    <DropDownPicker
                        items={[
                            {label: 'Pending', value: 'pending'},
                            {label: 'In Progress', value: 'inProgress'},
                            {label: 'Review', value: 'review'},
                            {label: 'On Hold', value: 'onHold'},
                        ]}
                        placeholder="Select Task Status"
                        defaultValue={this.state.status}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            status: item.value
                        })}
                    />
                    {/* <TouchableOpacity onPress={()=>this.setState({show: !this.state.show})}>
                        <Text style={{color:"white"}}>Set Date</Text>
                    </TouchableOpacity> */}

                    <View style={{marginTop: 20}}>
                        <Text style={styles.formDetailsTitle}>Start Date</Text>
                        <TouchableOpacity style={{
                            borderWidth:1, 
                            borderColor:"black",
                            borderRadius:3,
                            height:30,
                            marginBottom: 20,
                            backgroundColor:"white",
                            justifyContent:"center"
                            }}
                            onPress={()=>this.setState({show:true})}
                        >
                            <Text style={{marginLeft:10}}>{this.state.selectedStartDate === null ? "---------------" :
                            JSON.stringify(this.state.selectedStartDate)}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.formDetailsTitle}>End Date</Text>
                        <TouchableOpacity style={{
                            borderWidth:1, 
                            borderColor:"black",
                            borderRadius:3,
                            height:30,
                            marginBottom: 20,
                            backgroundColor:"white",
                            justifyContent:"center"
                            }}
                            onPress={()=>this.setState({show2:true})}
                        >

                            <Text style={{marginLeft:10}}>{this.state.selectedEndDate === null ? "---------------" :
                            JSON.stringify(this.state.selectedEndDate)}</Text>
                        </TouchableOpacity>
                    </View>

                    {this.state.show && 
                    <DateTimePicker
                        value={this.state.date}
                        mode={this.state.mode}
                        style={{backgroundColor:"white"}}
                        // onChange={()=>console.log(date)}
                        onChange={(event, a, selectedDate2)=>
                            { 
                                // console.log(selectedDate);
                                this.setState({selectedStartDate: a, show:false});
                            }}

                    />}
                    {this.state.show2 && 
                    <DateTimePicker
                        value={this.state.date}
                        mode={this.state.mode}
                        style={{backgroundColor:"white"}}
                        // onChange={()=>console.log(date)}
                        onChange={(event, b, selectedDate2)=>
                            { 
                                // console.log(selectedDate);
                                this.setState({selectedEndDate: b, show2:false});
                            }}

                    />}
                    
                    <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                        {this.state.selectedImage ===''?(
                            <TouchableOpacity onPress={()=> this.pickImagePressed()}>
                                <View style={styles.blankImageContainer}>
                                    <Text>+</Text>
                                </View>
                            </TouchableOpacity> 
                            ) : (
                            <View>
                                <TouchableOpacity onPress={()=> this.pickImagePressed()}>
                                    <View>
                                        <Image 
                                        source={{uri: this.state.selectedImage}}
                                        style={{width:100, height:100, borderWidth:1, borderColor:"black"}}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={()=>this.setState({selectedImage:""})}>
                                    <Text>x</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }

                        {this.state.selectedImage2 ===''?(
                            <TouchableOpacity onPress={()=> this.pickImagePressed2()}>
                                <View style={styles.blankImageContainer}>
                                    <Text>+</Text>
                                </View>
                            </TouchableOpacity> 
                            ) : (
                            <View>
                                <TouchableOpacity onPress={()=> this.pickImagePressed2()}>
                                    <View>
                                        <Image 
                                        source={{uri: this.state.selectedImage2}}
                                        style={{width:100, height:100, borderWidth:1, borderColor:"black"}}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={()=>this.setState({selectedImage2:""})}>
                                    <Text>x</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }
                        {/* <TouchableOpacity onPress={()=> this.pickImagePressed2()}>
                            <View> */}
                                {/* <Image 
                                source={{uri: this.state.selectedImage}}
                                style={{width:100, height:100, borderWidth:1, borderColor:"black"}}/> */}
                                {/* <Image 
                                source={{uri: this.state.selectedImage2}}
                                style={{width:100, height:100, borderWidth:1, borderColor:"black"}}/> */}
                                {/* <Ionicons 
                                name={"ios-egg"} 
                                size={25} 
                                color={"blue"}
                                /> */}
                            {/* </View>
                        </TouchableOpacity> */}
                    </View>
                    
                    <View >

                    <SubmitButtonComponenet
                        buttonTitle="Add Task"
                        submitButtonText="Add Task"
                        navigate={()=>this.addButtonPressed()}
                    />

                    </View>


            </ScrollView>

        );
    }
}
const styles={
    form:{
        margin: 15,
        padding: 20,
        backgroundColor:"white",
        width: "90%",
        height: "75%",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor:"white",
        justifyContent:"space-evenly",
        
    },

    formDetailsTitle: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10,
        color:"white"
    },

    cancelButton:{
        width: 20,
        height: 20,
        backgroundColor: "rgb(255,63,0)",
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center",
        position: "absolute",
        top: -5,
        right: -5,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowRadius: 6,
        shadowOpacity:1,
        shadowOffset: { 
          width: 3, 
          height:3
        },
    },

    blankImageContainer:{
        width:100, 
        height:100, 
        borderWidth:1, 
        borderColor:"black",
        justifyContent:"center", 
        alignItems:"center",
        backgroundColor:"white"
    }
}

export default AddToDo;