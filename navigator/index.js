import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import our containers
import Auth from "containers/auth";
import Dashboard from "containers/dashboard";
import Details from "containers/details";
import Profile from "containers/profile";
import AddToDo from "containers/form";
import TransitionBox from "containers/transition";
// import { Transition } from "react-native-reanimated";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class BottomTab extends React.Component{
    render(){
        return(
            <Tab.Navigator tabBarOptions={{
                // activeTintColor:"rgb(144, 238, 114)",
                activeTintColor:"rgb(0, 255, 0)",
                inactiveTintColor: "rgb(0,100,0)",
                activeBackgroundColor:"rgb(58, 58, 58)",
                inactiveBackgroundColor: "black",
                showLabel:false,
                
                
            }}>
                <Tab.Screen name="Dashboard" component={Dashboard} 
                    options={{
                        //tabBarIcon - color will listen to tabBarOptions under tab navigator.
                        tabBarIcon: ({color, focused})=> (
                        <Ionicons 
                        name={ focused? "ios-list": "ios-egg"} 
                        size={25} 
                        color={color}
                        />
                        ),  
                    }}
                    />

                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon: ({color, focused})=> (
                        <Ionicons 
                        name={ focused? "ios-person": "ios-egg"} 
                        size={25} 
                        color={color}
                        />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

class Navigator extends React.Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator>


                    <Stack.Screen 
                    name="Auth" 
                    component={Auth} 
                    
                    options=
                    {{
                        headerTitle:"Login", 
                        headerRight:() => <Text>Setting</Text>, 
                        headerLeft:() => <Text>Back</Text>,
                        headerShown: false,
                    }}
                    />

                    <Stack.Screen
                    name='BottomTab'
                    component={BottomTab}
                    
                    options=
                    {{
                        headerTitle:"ToDoo", 
                        headerStyle:{backgroundColor: "rgb(58,58,58)"},
                        headerTitleStyle:{color:"white"},
                        // headerShown: false,
                        // headerShown: false,
                    }}
                    />

                    {/* <Stack.Screen 
                    name="Dashboard" 
                    style={{backgroundColor:"rgb(64, 81, 78)"}}
                    component={Dashboard}
                    options={({navigation, route})=> ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <Text style={{color: "white", marginLeft:10}}>Back</Text>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                                <Text style={{color: "white", marginRight:10}}>Profile</Text>
                            </TouchableOpacity>
                        ),
                        headerStyle:{backgroundColor: "rgb(64, 81, 78)"},
                        headerTitleStyle:{color:"white"}
                    })}
                    /> */}

                    <Stack.Screen 
                    name="Details" 
                    component={Details}
                    /> 

                    <Stack.Screen 
                    name="AddToDo" 
                    component={AddToDo}
                    /> 

                    <Stack.Screen 
                    name="TransitionBox" 
                    component={TransitionBox}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


export default Navigator;