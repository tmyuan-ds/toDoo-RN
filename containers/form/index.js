import React from "react";
import { View, Text,  Alert, Button, Image, ScrollView} from "react-native";
import TextInputComponent from "../../component/textInput";
import SubmitButtonComponenet from "component/submit"
import {CONTAINER} from "common/styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import { TouchableOpacity } from "react-native-gesture-handler";
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
            selectedStartDate: null,
            image: null,
            selectedImage:'',
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
            Alert.alert("Success", "Now task added!");
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
    
    render(){
        // console.log(this.state.taskTitle);
        return(
            <ScrollView style={CONTAINER}>

                
                    <Text style={styles.formDetailsTitle}>Title</Text>
                    <TextInputComponent 
                    inputTitle="Title"
                    inputPlaceHolder="Title"
                    inputType="default"
                    // onChange={(title)=>console.log(title)}
                    // onChange={(title)=> this.setState({taskTitle:title})}
                    abc={(title)=> this.setState({taskTitle:title}, 
                        ()=>console.log(this.state.taskTitle))}
                    />
                    <Text style={styles.formDetailsTitle}>Details</Text>
                    <TextInputComponent 
                    inputTitle="Details"
                    inputPlaceHolder="Details"
                    inputType="default"
                    abc={(details)=>this.setState({taskDetails:details})}
                    />

                    <Text style={styles.formDetailsTitle}>Details</Text>
                    <TextInputComponent 
                    inputTitle="Status"
                    inputPlaceHolder="Status"
                    inputType="default"
                    abc={(status)=>this.setState({taskStatus:status})}

                    />
                    <TouchableOpacity onPress={()=>this.setState({show: !this.state.show})}>
                        <Text style={{color:"white"}}>Set Date</Text>
                    </TouchableOpacity>

                    <View>
                        <Text>Start Date</Text>
                        <TouchableOpacity style={{
                            borderWidth:1, 
                            borderColor:"black",
                            borderRadius:3,
                            height:30,
                            marginBottom: 20
                            }}
                            onPress={()=>this.setState({show:true})}
                        >
                            <Text>{this.state.selectedStartDate === null ? "---------------" :
                            JSON.stringify(this.state.selectedStartDate)}</Text>
                        </TouchableOpacity>
                    </View>

                    {this.state.show && 
                    <DateTimePicker
                        value={this.state.date}
                        mode={this.state.mode}
                        // onChange={()=>console.log(date)}
                        onChange={(event, selectedDate)=>
                            { 
                                // console.log(selectedDate);
                                this.setState({selectedStartDate: selectedDate, show:false});
                            }}

                    />}

                    <Button title="Select Image" onPress={()=> this.pickImagePressed()}/>
                    
                    <View style={{alignItems:"center"}}>
                        <Image 
                        source={{uri: this.state.selectedImage}}
                        style={{width:100, height:100, borderWidth:1, borderColor:"black"}}/>
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
        // justifyContent:"space-evenly",
        
    },

    formDetailsTitle: {
        fontWeight: "bold",
        fontSize: 15,
    }
}
export default AddToDo;